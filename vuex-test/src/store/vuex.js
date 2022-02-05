let Vue;

class Store {
    constructor(options) {
        this.vm = new Vue({
            data: {
                state: options.state
            }
        });
        //for getter
        let getters = options.getters || {};
        this.getters = {}//当前实例
        Object.keys(getters).forEach(getterName => {
            Object.defineProperty(this.getters, getterName, {
                get: () => {
                    return getters[getterName](this.state)
                }
            })
        })
        //for mutations
        let mutations = options.mutations || {}
        this.mutations = {}
        Object.keys(mutations).forEach(mutationName => {
            this.mutations[mutationName] = payload => {
                //调用传入的方法
                mutations[mutationName](this.state, payload)
            }
        })
        //for action
        let actions = options.actions || {}
        this.actions = {}
        Object.keys(actions).forEach(actionName => {
            this.actions[actionName] = payload => {
                actions[actionName](this, payload)
            }
        })
    }
    //异步
    dispatch(method, payload) {
        this.actions[method](payload)
    }
    //同步
    commit = (method, payload) => {
        this.mutations[method](payload)//调用
    }
    get state() {
        return this.vm.state
    }
}

//插件固定写法
const install = (v) => {
    // console.log(v);
    Vue = v;
    Vue.mixin({//需要在每个组件上添加$store
        beforeCreate() {
            if (this.$options && this.$options.store) {
                //root
                this.$store = this.$options.store
            } else {
                this.$store = this.$parent && this.$parent.$store
            }
        }
    })
}

export default {
    install,
    Store
};