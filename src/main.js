// import { createApp } from 'vue'
import './style.css'
import Vue from 'vue'

// createApp(App).mount('#app')
import { DatePicker, ConfigProvider } from 'ant-design-vue'
Vue.use(ConfigProvider)
Vue.use(DatePicker)
import 'ant-design-vue/dist/antd.css'

import App from './App.vue'

new Vue({
	render: h => h(App),
}).$mount('#app')