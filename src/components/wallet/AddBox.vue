<template>
  <AddBox>
    <Inner>
      <BoxTitle>기록 추가</BoxTitle>
      <FormGroup>
        <ValueBox>
          <ValueLabel>장소/업체</ValueLabel>
          <AddInputControl v-model="place" />
        </ValueBox>
        <ValueBox>
          <ValueLabel>금액</ValueLabel>
          <AddInputControl v-model="value" />
        </ValueBox>
        <ValueBox>
          <ValueLabel>항목</ValueLabel>
          <AddFormGroup>
            <label
              v-for="card of cardList"
              :key="card.uid"
              :for="`radio-card-${card.uid}`"
            >
              <RadioControl
                type="radio"
                name="card"
                :id="`radio-card-${card.uid}`"
                :value="card.id"
                @change="select(card)"
              />
              <LabelButton class="label" :class="card.uid">{{
                card.company
              }}</LabelButton>
            </label>
          </AddFormGroup>
        </ValueBox>
        <ValueBox>
          <ValueLabel>날짜</ValueLabel>
          <AddFormGroup>
            <label for="date-picker" class="full">
              <AddInputControl
                id="date-picker"
                class="center"
                readonly
                :value="formatDate"
                @change="changeDate"
              />
            </label>
          </AddFormGroup>
        </ValueBox>
        <ValueBox>
          <ValueLabel>설명</ValueLabel>
          <AddInputControl v-model="description" />
        </ValueBox>
      </FormGroup>
      <ButtonGroup class="w2">
        <CancelButton type="button" @click="close">취소</CancelButton>
        <SaveButton type="button" @click="save">저장</SaveButton>
      </ButtonGroup>
    </Inner>
  </AddBox>
</template>

<script>
import StyledComponent from '../../styled/addBox.styled';
import DatePicker from '../../util/date/picker';
import dateFormat from '../../util/date/format';

const components = { ...StyledComponent };

export default {
  name: 'addBox',
  components,
  data() {
    return {
      type: '',
      date: '',
      card: '',
      place: '',
      value: '',
      description: '',
      datePicker: null,
      formatDate: '',
    };
  },
  mounted() {
    this.initDatePicker();
  },
  computed: {
    selectedType() {
      return this.type;
    },
    cardList() {
      return [
        { id: 0, uid: 'income', company: '수입' },
        { id: 1, uid: 'hyundai', company: '현대카드' },
        { id: 2, uid: 'shinhan', company: '신한카드' },
        { id: 3, uid: 'lotte', company: '롯데카드' },
        { id: 4, uid: 'samsung', company: '삼성카드' },
        { id: 5, uid: 'kb', company: '국민카드' },
        { id: 6, uid: 'bc', company: 'BC카드' },
        { id: 7, uid: 'kakao', company: '카카오' },
      ];
    },
  },
  methods: {
    initDatePicker() {
      const target = document.querySelector('#date-picker');

      this.datePicker = new DatePicker({
        type: 'sticker',
        target,
      });

      this.datePicker.build(target);
    },
    select(value) {
      this.card = value.id;
      this.type = this.card === 0 ? 1 : 2;
    },
    changeDate({ target }) {
      this.date = new Date(target.getAttribute('data-origin'));
      this.formatDate = dateFormat(this.date, '%Y.%m.%d. %D. %H:%M');
    },
    save() {
      const error = this.validation();

      if (error) {
        this.$alert.warn(error);
        return;
      }

      const params = {
        type: this.type,
        card: this.card,
        place: this.place,
        value: this.value,
        description: this.description,
        date: this.date,
      };

      const config = {
        headers: {
          userID: this.$store.getters.id,
        },
      };

      this.$Wallet
        .post('/timeline', params, config)
        .then(data => {
          if (data.status === 201) {
            this.close();
            this.update();
          }
        })
        .catch(console.error);
    },
    validation() {
      const { place, value, card, date } = this;

      if (!place) {
        return {
          message: '장소/업체를 입력해주세요.',
        };
      }

      if (!value) {
        return {
          message: '금액을 입력해주세요.',
        };
      }

      if (card === null || card === undefined || card === '') {
        return {
          message: '항목을 선택해주세요.',
        };
      }

      if (!date) {
        return {
          message: '날짜를 선택해주세요.',
        };
      }

      return null;
    },
    close() {
      this.$emit('close');
    },
    update() {
      this.$emit('update');
    },
  },
};
</script>
