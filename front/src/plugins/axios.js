import Vue from 'vue';
import axios from 'axios';

Vue.use({
  // eslint-disable-next-line no-shadow
  install(Vue) {
    // eslint-disable-next-line no-param-reassign
    Vue.prototype.$http = axios.create({
      baseURL: 'http://localhost:3000/',
    });
  },
});

export default axios;
