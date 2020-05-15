<template>
  <Wallet v-if="ready">
    <SignForm v-if="needSign">
      <FormGroup class="form-group">
        <label for="id">
          <SignInput
            type="text"
            id="id"
            placeholder="아이디"
            v-model="sign.id"
          />
        </label>
        <label for="name">
          <SignInput
            type="text"
            id="name"
            placeholder="이름"
            v-model="sign.name"
            @keyup.enter="signIn"
          />
        </label>
      </FormGroup>
      <SignButton type="button" class="btn-default" @click="signIn">
        로그인
      </SignButton>
    </SignForm>
    <template v-else>
      <TotalValue v-if="timeline && timeline.length" :class="totalStatus"
        >{{ Math.abs(total).toLocaleString() }}<span class="font s12">원</span>
      </TotalValue>
      <transition-group name="log" tag="div" class="log-group">
        <Log v-for="(log, index) of timelineComputed" :key="log.id">
          <Date v-if="log.dateShow">{{ log.date }}</Date>
          <Card>
            <SymbolText :expenses="!!log.card">{{
              log.card ? 'EX' : 'IN'
            }}</SymbolText>
            <CloseButton
              v-if="+log.userID === +sign.id"
              type="button"
              class="btn-none btn-spread"
              :class="log.spread && 'open'"
              @click="deleteLog(log, index)"
            />
            <PlaceLabel>{{ log.place }}</PlaceLabel>
            <CardLabel v-if="log.card">{{ log.card }}</CardLabel>
            <DescriptionLabel v-if="log.description">{{
              log.description
            }}</DescriptionLabel>
            <ValueLabel :class="log.type"
              >{{ log.value.toLocaleString() }}<span class="font s14">원</span>
            </ValueLabel>
          </Card>
          <ShortDateLabel>{{ log.dateTime }}</ShortDateLabel>
        </Log>
      </transition-group>
      <transition name="add-box">
        <AddBox v-if="add" @close="addWallet" @update="update" />
      </transition>
      <FloatingAddButton
        type="button"
        class="btn-float btn-add font s24"
        :class="add && 'cancel'"
        @click="addWallet"
      >
        +
      </FloatingAddButton>
    </template>
  </Wallet>
</template>

<script>
import { mapGetters } from 'vuex';
import dateFormat from '../util/date/format';
import StyledComponent from '../styled/wallet.styled';
import AddBox from '../components/wallet/AddBox';

const components = {
  ...StyledComponent,
  AddBox,
};

export default {
  name: 'home',
  components,
  data() {
    return {
      ready: false,
      sign: {
        id: this.id,
        name: this.name,
        nickname: this.nickname,
      },
      timeline: [],
      add: false,
    };
  },
  created() {
    this.signIn();
  },
  computed: {
    ...mapGetters(['id', 'name', 'nickname']),
    needSign() {
      return !this.id || !this.name || !this.nickname;
    },
    total() {
      return this.timeline.reduce((acc, log) => {
        const minus = log.type === 'expenses';
        return acc + (minus ? -log.value : log.value);
      }, 0);
    },
    totalStatus() {
      return this.total > 0 ? 'increase' : 'loss';
    },
    timelineComputed() {
      const registeredDate = [];

      return this.timeline.map(log => {
        const date = dateFormat(log.date, '%Y.%m.%d %D');
        let dateShow = false;

        if (!registeredDate.includes(date)) {
          registeredDate.push(date);
          dateShow = true;
        }

        return {
          ...log,
          date,
          dateShow,
          dateTime: dateFormat(log.date, '%m.%d %H:%M'),
        };
      });
    },
  },
  methods: {
    signIn() {
      const id = this.id || this.sign.id;
      const name = this.name || this.sign.name;

      if (id && name) {
        const params = {
          id,
          name,
        };

        this.requestUser(params);
      } else {
        this.validation();
      }

      this.ready = true;
    },
    requestUser(params) {
      this.$Wallet
        .post('/user', params)
        .then(({ data }) => {
          const { nickname } = data;

          localStorage.setItem('blogwoo_wallet_id', params.id);
          localStorage.setItem('blogwoo_wallet_name', params.name);
          localStorage.setItem('blogwoo_wallet_nickname', nickname);

          this.sign = {
            ...params,
            nickname,
          };

          this.$store.commit('sign', this.sign);

          return this.getTimeline();
        })
        .then(({ data }) => {
          this.timeline = data;
        })
        .catch(this.error);
    },
    validation() {
      this.$alert.warn({
        message: '아이디와 이름을 입력해주세요.',
      });
    },
    getTimeline() {
      return this.$Wallet.get('/timeline');
    },
    update() {
      this.getTimeline().then(({ data }) => (this.timeline = data));
    },
    error(err) {
      if (err.response) {
        const { status } = err.response;
        const { message } = err.response.data;

        if (status === 500) {
          this.$alert.warn({ message });
        }
      }
    },
    addWallet() {
      this.add = !this.add;

      document.body.style.overflow = this.add ? 'hidden' : 'auto';
    },
    deleteLog(log, index) {
      this.$alert.confirm({
        message: '해당 기록을 삭제하시겠습니까?',
        method: () => {
          this.deleteRequest(log).then(res => {
            if (res.status === 201) {
              this.timeline.splice(index, 1);
              this.timeline = this.timeline.slice();
            }
          });
        },
      });
    },
    deleteRequest({ id }) {
      return this.$Wallet.put(`/timeline/${id}`);
    },
  },
};
</script>
