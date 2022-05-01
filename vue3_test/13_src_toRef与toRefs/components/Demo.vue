
<template>
   <h4>{{person}}</h4>
   <h2>姓名：{{name}}</h2>
   <h2>年龄：{{age}}</h2>
   <h2>薪资：{{job.salary}}</h2>
    <button @click="name+='~'">修改姓名</button>
    <button @click="age++">增长年龄</button>
    <button @click="job.salary++">涨薪</button>
</template>

<script>
import {reactive,toRef,toRefs} from 'vue'
export default {
  name: 'Demo',
  setup() {
    //数据
    let person = reactive({
        name: '张三',
        age: 18,
        job: {
            salary:20
        }
    })

    // const name1 = person.name
    // console.log('%%%',name1)

    // const name2 = toRef(person,'name')
    // console.log('####',name2)
    
    //返回一个对象（常用）
    return{
        person,
    //   name:toRef(person,'name'),
    //   age:toRef(person,'age'),
    //   salary:toRef(person.job,'salary')
       ...toRefs(person)
    }
    
  }
}
</script>
