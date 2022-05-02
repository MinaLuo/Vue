<template>
    <input type="text" v-model="keyWord"/>
    <h3>{{keyWord}}</h3>
</template>

<script>
import {ref,customRef} from 'vue'
export default {
  name: 'App',
  setup(){
    //自定义一个ref————myRef
    function myRef(value,delay){
      let timer
      return customRef((track,trigger)=>{
        return {
          get(){
            console.log(`有人从myRef这个容器中读取数据了，我把${value}给他了`)
            track()//4.通知vue追踪value的变化(提前和get商量一下，让他认为这个value是有用的)
            return value//3
          },
          set(newValue){
            console.log(`有人把myRef这个容器中数据改为了：${newValue}`)
            clearTimeout(timer)
            timer = setTimeout(() =>{
              value = newValue//1
              trigger()//2.通知vue去重新解析模板
            },delay)
          }
        }
      })
    }
    // let keyWord = ref('hello')//使用vue提供的ref
    let keyWord = myRef('hello',500)//使用程序员自定义的ref
    return {keyWord}
  }
}
</script>
