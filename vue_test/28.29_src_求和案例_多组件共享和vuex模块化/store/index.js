//该文件用于创建vuex中最为核心的store
//引入Vue
import Vue from 'vue'
//引入vuex
import Vuex from 'vuex'
import countOptions from './count'
import personOptions from './person'
//使用Vuex
Vue.use(Vuex)

//创建store并暴露store
export default new Vuex.Store({
    modules: {
        CountAbout: countOptions,
        PersonAbout: personOptions
    }
})

