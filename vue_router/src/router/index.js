import Vue from 'vue'
import Router from './vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'

//1.Router是一个插件 use
//内部做了什么
//1)实现并声明了两个全局注册的组件，分别是router-link和router-view
//2)实现install: this.$router.push()
Vue.use(Router)

// 2.创建实例
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: () =>
        import("../components/About.vue")
    }
  ]
})
