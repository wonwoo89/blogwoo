import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import dateFormat from './util/date/format';

import axios from './plugins/AxiosPlugin';
import setKey from './plugins/KeyPlugin';
import deepCopy from './plugins/DeepCopyPlugin';
import semanticUI from 'semantic-ui-vue';
import Alert from './plugins/AlertPlugin';

import 'semantic-ui-css/semantic.min.css';
import './styled/global.styled';

Vue.use(axios);
Vue.use(setKey);
Vue.use(deepCopy);
Vue.use(semanticUI);
Vue.use(new Alert(store));

Vue.config.productionTip = false;

const dateRange = () => {
  const oneDay = 60 * 60 * 24 * 1000;
  const date = new Date();
  const today = dateFormat(date, '%Y-%m-%d');
  const tomorrow = dateFormat(date.getTime() + oneDay, '%Y-%m-%d');

  return {
    today,
    tomorrow,
  };
};
const callApi = target =>
  axios.http.post(`/log/${target}`, dateRange).catch(console.error);

router.afterEach(() => {
  // callApi('uv').then();
  // callApi('pv').then();
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
