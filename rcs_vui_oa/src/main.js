import Vue from 'vue'
import router from '@/router'
import store from '@/store'
import APP from './APP'
import './components/styles/theme/index.scss'
import Components from 'components'

Vue.use(Components)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(APP)
})

let initRootFontSize = function () {
    let deviceWidth = window.innerWidth
    let devicePixelRatio = window.devicePixelRatio || window.webkitDevicePixelRatio || window.mozDevicePixelRatio
    let calc = 7.5
    if (deviceWidth > 768) deviceWidth = 768
    if (deviceWidth < 320) deviceWidth = 320
    if (deviceWidth < 320 && devicePixelRatio >= 2) calc = calc - (devicePixelRatio - 1)
    let fontSize = Math.ceil(deviceWidth / calc)
    if (fontSize % 2 === 1) {
        fontSize--
    }
    document.documentElement.style.fontSize = fontSize + 'px'// 计算设计稿和实际像素的缩放比。向上取整1px = 0.01rem
}
window.addEventListener('resize', initRootFontSize)
initRootFontSize()
