import Vue from 'vue'
import App from './App.vue'
import store from './store';
import ElementUI from 'element-ui';
Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  name: 'root',
  store,
  render: h => h(App),
}).$mount('#app')
