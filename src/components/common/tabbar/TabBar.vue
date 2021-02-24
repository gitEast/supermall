<!--
 * @version: 1.0
 * @Author: East Wind
 * @Description: TabBar的组件
 * @Date: 2021-02-22 12:26:43
 * @LastEditors: East Wind
 * @LastEditTime: 2021-02-22 13:13:51
-->
<template>
  <div id="tab-bar">
      <slot></slot>
    </div>
</template>
<script>
export default {
  name: 'TabBar'
}
</script>
<style scoped>
  #tab-bar {
    display: flex;
    background-color: #f6f6f6;

    /* 固定于底部 */
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    /* 阴影，平缓过渡 */
    box-shadow: 0px -1px 1px rgba(100, 100, 100, 0.1);
  }
</style>
