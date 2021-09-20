export default {
    install(Vue, x, y, z) {
        console.log(x, y, z)
        //全局的过滤器
        Vue.filter('mySlice', function (value) {
            return value.slice(0, 4)
        })

        //定义全局指令
        Vue.directive('fbind', {
            //指令和元素成功绑定时（一上来）
            bind(element, binding) {
                element.value = binding.value
            },
            //指令所在元素被插入页面时
            inserted(element, binding) {
                element.focus()
            },
            //指令所有的模块被重新解析时
            update(element, binding) {
                element.value = binding.value
            },
        })

        //定义混入
        Vue.mixin({
            data() {
                return {
                    x: 100,
                    y: 200
                }
            }
        })

        //给Vue原型上添加一个方法（vm 和 vc就都能用了）
        Vue.prototype.hello = () => { alert('你好啊！') }
    }
};

