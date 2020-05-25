import Vue from 'vue'
import App from './App.vue'

import XszButton from './components/button'
import Dialog from './components/dialog'
import XszInput from './components/input'

import "./assets/font-awesome-4.7.0/css/font-awesome.min.css"
import "./assets/base/base.css"


Vue.config.productionTip = false;

// 全局注册组件
Vue.component(XszButton.name, XszButton);
Vue.component(Dialog.name, Dialog);
Vue.component(XszInput.name, XszInput);

new Vue({
  render: h => h(App),
}).$mount('#app');
