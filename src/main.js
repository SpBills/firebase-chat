import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

import * as fb from "./firebase";

fb.initialize();

new Vue({
  render: h => h(App),
}).$mount('#app')
