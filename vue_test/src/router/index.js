//该文件专门用于创建整个应用的路由器
//引入VueRouter
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import News from '../pages/News'
import Detail from '../pages/Detail'

//创建并暴露一个路由器
export default new VueRouter({
    routes: [
      { 
        name: 'guanyu',
        path: '/about',
        component: About
      },
      { 
        path: '/home',
        component: Home,
        children: [
          { 
            path: 'message',
            component: Message,
            children: [
              {
                name: 'xiangqing',
                path: 'detail',
                component: Detail
              }
            ]
          },
          { 
            path: 'news',
            component: News
          },
        ]
      }
    ]
})