<template>
  <div id="app">
    <div id="nav">
      <!-- 路由跳转 -->
      <router-link to="/">Hello</router-link>
      <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <!-- 路由出口 -->
    <!-- 利用vue响应式 -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
