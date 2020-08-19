import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

import './assets/font-awesome-4.7.0/css/font-awesome.min.css'

import XmButton from '@/components/XmButton/XmButton'
import XmButtonGroup from '@/components/XmButtonGroup/XmButtonGroup'
import XmSwitch from '@/components/XmSwitch/XmSwitch'
import XmCheckbox from '@/components/XmCheckbox/XmCheckbox'
import XmCheckboxGroup from '@/components/XmCheckboxGroup/XmCheckboxGroup'
import XmInput from '@/components/XmInput/XmInput'
import XmRadio from '@/components/XmRadio/XmRadio'


// 全局注册组件
Vue.component(XmButton.name, XmButton)
Vue.component(XmButtonGroup.name, XmButtonGroup)
Vue.component(XmSwitch.name, XmSwitch)
Vue.component(XmCheckbox.name, XmCheckbox)
Vue.component(XmCheckboxGroup.name, XmCheckboxGroup)
Vue.component(XmInput.name, XmInput)
Vue.component(XmRadio.name, XmRadio)

new Vue({
  render: h => h(App),
}).$mount('#app');
