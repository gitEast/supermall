<!--
 * @version: 1.0
 * @Author: East Wind
 * @Description: About this file
 * @Date: 2021-02-24 18:33:07
 * @LastEditors: East Wind
 * @LastEditTime: 2021-02-24 19:06:40
-->
<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>
<script>
export default {
  name: 'NabBar'
}
</script>
<style scoped>
.nav-bar {
  display: flex;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
}

.left, .right {
  width: 60px;
}

.center {
  flex: 1;
}
</style>
