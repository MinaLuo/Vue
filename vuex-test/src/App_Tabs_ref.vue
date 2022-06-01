<template>
<div>
   <div v-if='activeStep ===0'>
    第一步
   </div>
  <div v-if='activeStep ===1'>
    <el-tabs v-model="activeName" @tab-click="handleClick" ref="tabsEl">
        <el-tab-pane v-if="isShow" label="用户管理" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
  <button style="margin-top: 12px;" @click="next">下一步</button>
</div>
</template>
<script>
  export default {
    data() {
      return {
        activeStep:0,
        activeName: 0,
        isShow: false,
      };
    },
    methods: {
    // async 
    next(){
    //    await this.$nextTick()
       this.activeStep = 1
       setTimeout(() => {
            console.log(this.$refs.tabsEl,'tabsEl')
            this.activeName = this.$refs.tabsEl.panes[0].name;
       },2000)
      
     },
     async handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    async beforeCreate() {
        // await this.$nextTick()
        console.log('beforeCreate',this.$refs.tabsEl)
    },
  };
</script>