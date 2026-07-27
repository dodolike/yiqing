import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/HelloWorld.vue'
Vue.use(VueRouter)
const routes = [{
        path: '/',
        component: Home,
        alias: '/home'
    },
]
const routers = new VueRouter({
    routes
})
export default routers