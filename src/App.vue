<template>
  <App>
    <Nav>
      <NavBack />
      <Inner>
        <Title as="h4">Blogwoo.wallet</Title>
      </Inner>
    </Nav>
    <router-view class="router-view" />
    <Alert />
  </App>
</template>

<script>
import StyledComponent from './styled/app.styled';
import Alert from './components/common/Alert.vue';

const components = {
  ...StyledComponent,
  Alert,
};

export default {
  name: 'app',
  components,
  data() {
    return {
      displayMode: window.localStorage.getItem('displayMode'),
    };
  },
  mounted() {
    this.changeDisplayMode(this.mode);
  },
  watch: {
    mode(newMode, oldMode) {
      if (newMode !== oldMode) {
        this.changeDisplayMode(newMode);
      }
    },
  },
  methods: {
    nameCheck(name) {
      const nameReg = new RegExp(name, 'gi');
      return nameReg.test(this.$route.name);
    },
    changeDisplayMode(mode) {
      if (!mode) {
        return;
      }

      this.displayMode = mode;
      localStorage.setItem('displayMode', mode);
      document.body.parentNode.setAttribute('mode', mode);
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Nanum+Gothic+Coding');
</style>
