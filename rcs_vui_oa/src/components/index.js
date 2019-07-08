import Button from './button'

// 所有组件的数组
let components = [
    Button
]
// 组件注册
const install = (Vue) => {
    components.map(component => {
        component && component.name && Vue.component(component.name, component)
    })
    // 此处可加提示框
    Vue.prototype.$alert = (_props, mounted = document.body) => {}
    Vue.prototype.$toast = (_props, mounted = document.body) => {}
}

export {
    install,
    Button
}

export default {
    install,
    Button
}
