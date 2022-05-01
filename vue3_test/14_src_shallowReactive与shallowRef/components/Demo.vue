
<template>
   <h4>当前的x.y值是：{{x.y}}</h4>
   <button @click="x={y:888}">点我替换x</button>
   <button @click="x.y++">点我x.y++</button>
   <hr/>
   <h4>{{person}}</h4>
   <h2>姓名：{{name}}</h2>
   <h2>年龄：{{age}}</h2>
   <h2>薪资：{{job.salary}}</h2>
    <button @click="name+='~'">修改姓名</button>
    <button @click="age++">增长年龄</button>
    <button @click="job.salary++">涨薪</button>
</template>

<script>
import {ref,reactive,toRef,toRefs,shallowReactive,shallowRef} from 'vue'
export default {
  name: 'Demo',
  setup() {
    //数据
    //let person = shallowReactive只考虑第一层数据的响应式
    let person = reactive({
        name: '张三',
        age: 18,
        job: {
            salary:20
        }
    })

    //shallowRef只处理基本类型的响应式数据，不进行对象的响应式处理
    let x = shallowRef({
        y:0
    })
    console.log('*****',x)
    
    //返回一个对象（常用）
    return{
        person,
       ...toRefs(person),
       x
    }
    
  }
}
</script>
