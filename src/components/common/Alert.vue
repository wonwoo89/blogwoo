<template>
  <Alert>
    <Background v-if="alert && !push" />
    <transition name="alert">
      <MessageBox v-if="alert">
        <MessageWrap>
          <Message>
            <span class="text font black s16">{{ message }}</span>
          </Message>
        </MessageWrap>
        <ButtonWrap v-if="!push">
          <AlertButtonGroup class="btn-group" :class="confirm ? 'w2' : ''">
            <AlertButton
              v-if="confirm"
              type="button"
              class="btn-cancel"
              @click="cancel"
            >
              <span class="text font s18">Cancel</span>
            </AlertButton>
            <AlertButton type="button" class="btn-default btn-ok" @click="ok">
              <span class="text font s18">OK</span>
            </AlertButton>
          </AlertButtonGroup>
        </ButtonWrap>
      </MessageBox>
    </transition>
  </Alert>
</template>

<script>
import { mapState } from 'vuex';
import StyledComponent from '../../styled/alert.styled';

const components = { ...StyledComponent };

export default {
  name: 'alert',
  components,
  watch: {
    alert(alert) {
      if (alert) {
        this.disableFocus();
        this.addKeyEvent();
      } else {
        this.removeKeyEvent();
      }
    },
    prevent(run) {
      if (run) {
        this.prevent();
      }
    },
  },
  computed: {
    ...mapState(['alert']),
    prevent() {
      return this.alert && this.alert.prevent;
    },
    message() {
      return this.alert.message;
    },
    confirm() {
      return this.alert && this.alert.confirm;
    },
    after() {
      return this.alert && this.alert.after;
    },
    push() {
      return this.alert && this.alert.isPush;
    },
  },
  methods: {
    ok() {
      if (this.confirm && typeof this.confirm === 'function') {
        this.confirm();
      }

      if (this.after && typeof this.after === 'function') {
        this.after();
      }

      this.cancel();
    },
    cancel() {
      this.$alert.close();
    },
    disableFocus() {
      const focusElement = Object.values(document.querySelectorAll(':focus'));

      focusElement.forEach(v => v.blur());
    },
    addKeyEvent() {
      window.addEventListener('keyup', this.keyEvent, true);
    },
    removeKeyEvent() {
      window.removeEventListener('keyup', this.keyEvent, true);
    },
    keyEvent(event) {
      const { key } = event;

      event.stopPropagation();

      if (!key) {
        this.cancel();
        return;
      }

      if (/enter/i.test(key)) {
        this.ok();
        return;
      }

      if (/esc/i.test(key)) {
        this.cancel();
      }
    },
  },
};
</script>
