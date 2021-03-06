import Vue from 'vue'
// import App from './App.vue'
import App from './App_Tabs_ref.vue'
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  name: 'root',
  store,
  render: h => h(App),
}).$mount('#app')
