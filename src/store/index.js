import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    color: {
      black: '#080808',
      black15: '#151515',
      black1d: '#1d1d1d',
      white: '#FFFFFF',
      lightGray: '#F9F9F9',
      gray: '#EEEEEE',
      boldGray: '#A4A4A4',
      darkGray: '#666666',
      red: '#FF0040',
      blue: '#1870F4',
      darkBlue: '#003569',
      yellow: '#FFFC00',
      lightYellow: '#FFEE00',
      apricot: '#FEC44F',
      boldApricot: '#FFB624',
    },
    alert: null,
    sign: {
      id: localStorage.getItem('blogwoo_wallet_id'),
      name: localStorage.getItem('blogwoo_wallet_name'),
      nickname: localStorage.getItem('blogwoo_wallet_nickname'),
    },
  },
  mutations: {
    alert(state, alert) {
      state.alert = alert;
    },
    sign(state, sign) {
      state.sign = sign;
    },
  },
  getters: {
    getColor: state => name => {
      return state.color[name] || state.color.white;
    },
    id(state) {
      return state.sign.id;
    },
    name(state) {
      return state.sign.name;
    },
    nickname(state) {
      return state.sign.nickname;
    },
  },
});
