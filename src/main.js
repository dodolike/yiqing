import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import echarts from 'echarts'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$echarts = echarts


Vue.config.productionTip = false

function isMobile() {
    let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
    return flag;
}

function resize() {
    var cliWidth = document.documentElement.getBoundingClientRect().width
    designWidth = 37.5
    rem = cliWidth / designWidth
    document.documentElement.style.fontSize = rem + 'px'
}
if (isMobile()) {
    window.addEventListener('resize', resize, false)
    document.addEventListener('DOMContentLoaded', resize, false)
}
new Vue({
    render: h => h(App),
    router: router

}).$mount('#app')