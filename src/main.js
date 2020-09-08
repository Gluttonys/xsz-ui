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
import XmRadioGroup from '@/components/XmRadioGroup/XmRadioGroup'
import XmDialog from '@/components/XmDialog/XmDialog'
// 仅适配手机端， PC 端可能出现问题
import XmInputHeader from '@/components/XmInputHeader/XmInputHeader'
import XmImageBlock from '@/components/XmImageBlock/XmImageBlock'
import XmContainer from '@/components/XmContainer/XmContainer'


// 全局注册组件
Vue.component(XmButton.name, XmButton)
Vue.component(XmButtonGroup.name, XmButtonGroup)
Vue.component(XmSwitch.name, XmSwitch)
Vue.component(XmCheckbox.name, XmCheckbox)
Vue.component(XmCheckboxGroup.name, XmCheckboxGroup)
Vue.component(XmInput.name, XmInput)
Vue.component(XmRadio.name, XmRadio)
Vue.component(XmRadioGroup.name, XmRadioGroup)
Vue.component(XmDialog.name, XmDialog)
// ========================
Vue.component(XmInputHeader.name, XmInputHeader)
Vue.component(XmImageBlock.name, XmImageBlock)
Vue.component(XmContainer.name, XmContainer)

new Vue({
  render: h => h(App),
}).$mount('#app');
