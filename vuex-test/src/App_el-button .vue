<template>
  <div id="app">
	<!-- <el-button type="primary" @click="handleBtn">
	123
	<i class="el-icon-edit" @click="say "></i>
    </el-button> -->
	<el-button 
		class="tag-item" v-for="(item,index) in allGroups"
		:key="item.id"
		@click='clickTag(item)'> 
		{{ item.name }} 
		<el-popover
		placement="bottom-start"
		width="100"
		:key="item.id"
		trigger="manual"
		v-model="item.popVisible"
		>
		<div class="popover-button">
			<el-button style="margin-bottom:5px;" @click='handleCommand("edit",item,index)'> 编辑分组<i class="el-icon-edit el-icon--right"></i></el-button>
			<el-button type="danger" @click='handleCommand("delete",item,index)'> 删除分组<i class="el-icon-delete el-icon--right"></i></el-button>
		</div>
		<i 
			class="el-icon-menu el-icon--right" 
			v-show='item.id == activeUserGroup.id'
			slot="reference"
			@click="clickMenu($event,item,index)"></i>
		</el-popover>
	</el-button>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data(){
	return { 
		activeUserGroup: {
			id: -1,
		},
		allGroups: [{
          id: '1',
          name: '王小虎1'
        }, {
          id: '2',
          name: '王小虎2',
        }, {
          id: '3',
          name: '王小虎3'
        }]
	}
  },
  methods: {
	clickTag(item){
		console.log('111111')
		this.activeUserGroup.id = item.id
	},
	clickMenu(e, item) {
		console.log('22222222')
		item.popVisible = true
	},
	handleCommand(type,item) {
		item.popVisible = false
	}
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
