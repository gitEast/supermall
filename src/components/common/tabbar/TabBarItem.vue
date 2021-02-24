<!--
 * @version: 1.0
 * @Author: East Wind
 * @Description: TabBarItem
 * @Date: 2021-02-22 13:09:06
 * @LastEditors: East Wind
 * @LastEditTime: 2021-02-24 18:19:39
-->
<template>
  <div class="tab-bar-item" @click="toView">
    <div class="img" v-if="!isActive"><slot name="item-icon"></slot></div>
    <div class="img" v-else><slot class="img1" name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>
<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  computed: {
    isActive () {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle () {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    toView () {
      this.$router.push(this.path)
    }
  }
}
</script>
<style scoped>
  /* 水平放置 */
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  /* tabBarItem内的图片 */
  .tab-bar-item >>> img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    margin-bottom: 1px;
    vertical-align: middle;
  }
  /* img {
    width: 24px;
    height: 24px;
  } */
</style>
