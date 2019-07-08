import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import './styles/bootstrap.css'
import '../../src/components/styles/theme/index.scss'
import * as Components from 'components'
import App from './App.vue'

Vue.use(Components)
Vue.use(Router)
/* eslint-disable */
new Vue({
    router: new Router({
        routes
    }),
    el: '#app',
    render: h => h(App)
})
// 适配
let initRootFontSize = () => {
    let deviceWidth = window.innerWidth
    let devicePixelRatio = window.devicePixelRatio || window.webkitDevicePixelRatio || window.mozDevicePixelRatio
    let calc = 7.5
    if (deviceWidth > 414) deviceWidth = 414
    if (deviceWidth < 320) deviceWidth = 320
    if (deviceWidth < 320 && devicePixelRatio >= 2) calc = calc - (devicePixelRatio - 1)
    document.documentElement.style.fontSize = Math.ceil(deviceWidth / calc) + 'px'// 计算设计稿和实际像素的缩放比。向上取整1px = 0.01rem
  }
  window.addEventListener('resize', initRootFontSize)
  initRootFontSize()