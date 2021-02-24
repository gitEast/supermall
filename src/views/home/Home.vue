<!--
 * @version: 1.0
 * @Author: East Wind
 * @Description: About this file
 * @Date: 2021-02-22 13:51:54
 * @LastEditors: East Wind
 * @LastEditTime: 2021-02-24 19:08:57
-->
<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center><p>首页</p></template>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name: 'Home',
  components: {
    NavBar
  }
}
</script>
<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: white;
}
</style>
