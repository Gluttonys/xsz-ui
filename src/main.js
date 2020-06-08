import Vue from 'vue'
import App from './App.vue'

import XszButton from './components/button'
import XszDialog from './components/dialog'
import XszInput from './components/input'
import XszSwitch from './components/switch'
import XszRadio from './components/radio'
import XszRadioGroup from './components/radio-group'
import XszCheckbox from './components/checkbox'
import XszCheckboxGroup from './components/checkbox-group'
import XszForm from './components/form'
import XszFormItem from './components/form-item'

import "./assets/font-awesome-4.7.0/css/font-awesome.min.css"
import "./assets/base/base.css"

Vue.config.productionTip = false;

// 全局注册组件
Vue.component(XszButton.name, XszButton)
Vue.component(XszDialog.name, XszDialog)
Vue.component(XszInput.name, XszInput)
Vue.component(XszSwitch.name, XszSwitch)
Vue.component(XszRadio.name, XszRadio)
Vue.component(XszRadioGroup.name, XszRadioGroup)
Vue.component(XszCheckbox.name, XszCheckbox)
Vue.component(XszCheckboxGroup.name, XszCheckboxGroup)
Vue.component(XszForm.name, XszForm)
Vue.component(XszFormItem.name, XszFormItem)

new Vue({
  render: h => h(App),
}).$mount('#app');
