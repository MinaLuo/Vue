//该文件用于创建vuex中最为核心的store
//引入Vue
import Vue from 'vue'
//引入vuex
import Vuex from 'vuex'
//使用Vuex
Vue.use(Vuex)

//求和相关的配置
const countOptions = {
    actions: {
        jiaOdd(context, value) {
            console.log('actions中的jiaOdd被调用了', context)
            if (context.state.sum % 2) {
                context.commit('JIA', value)
            }
        },
        jiaWait(context, value) {
            console.log('actions中的jia被调用了')
            setTimeout(() => {
                context.commit('JIA', value)
            }, 500)
        },
    },
    mutations: {
        JIA(state, value) {
            console.log('mutations中的JIA被调用了')
            state.sum += value
        },
        JIAN(state, value) {
            console.log('mutations中的JIAN被调用了')
            state.sum -= value
        },
    },
    state: {
        sum: 0, //当前的和
        school: '尚硅谷',
        subject: '前端',
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    },
}

//人员管理相关的配置
const personOptions = {
    actions: {},
    mutations: {
        ADD_PERSON(state, value) {
            console.log('mutations中的ADD_PERSON被调用了')
            state.personList.unshift(value)
        }
    },
    state: {
        personList: [
            { id: '001', name: '张三' }
        ],
    },
    getters: {},
}


//创建store并暴露store
export default new Vuex.Store({
    modules: {
        a: countOptions,
        b: personOptions
    }
})

