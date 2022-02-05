import Vue from 'vue';
import Vuex from './vuex';

Vue.use(Vuex);//添加插件
export default new Vuex.Store({
    //存储状态
    state: {
        num: 0
    },
    //获取状态
    getters: {
        getNum(state) {
            return state.num;
        }
    },
    //同步更新状态
    mutations: {
        //增加
        incre(state, payload) {
            state.num += payload
        },
        //减少
        minus(state, payload) {
            state.num -= payload
        }
    },
    //异步更新状态 ajax
    actions: {
        asyncIncre({ commit }, payload) {
            //模拟ajax
            setTimeout(() => {
                commit('incre', payload)
            }, 1000)
        }
    }
})