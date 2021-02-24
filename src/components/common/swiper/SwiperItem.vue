<!--
 * @version: 1.0
 * @Author: East Wind
 * @Description: About this file
 * @Date: 2021-02-24 20:29:30
 * @LastEditors: East Wind
 * @LastEditTime: 2021-02-24 21:53:33
-->
<template>
  <div class="slide">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Slide'
}
</script>
<style scoped>
  .slide {
    width: 100%;
    flex-shrink: 0;
  }

  .slide >>> img {
    width: 100%;
  }
</style>
