import Vue from 'vue'
import VueRouter from 'vue-router'
import demos from './demos'

Vue.use(VueRouter)

console.log(demos, 'demos')

const router = new VueRouter({
    routes: [
        ...demos
    ]
})

export default router
