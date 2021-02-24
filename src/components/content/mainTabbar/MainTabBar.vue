<!--
 * @version: 1.0
 * @Author: East Wind
 * @Description: About this file
 * @Date: 2021-02-22 14:38:12
 * @LastEditors: East Wind
 * @LastEditTime: 2021-02-24 18:58:10
-->
<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="red">
        <template v-slot:item-icon><img src="~assets/img/tabbar/home.svg" alt=""></template>
        <template v-slot:item-icon-active><img src="~assets/img/tabbar/home_active.svg" alt=""></template>
        <template v-slot:item-text><div>首页</div></template>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="red">
        <template v-slot:item-icon><img src="~assets/img/tabbar/classification.svg" alt=""></template>
        <template v-slot:item-icon-active><img src="~assets/img/tabbar/classification_active.svg" alt=""></template>
        <template v-slot:item-text><div>分类</div></template>
      </tab-bar-item>
      <tab-bar-item path="cart" activeColor="red">
        <template v-slot:item-icon><img src="~assets/img/tabbar/shopping.svg" alt=""></template>
        <template v-slot:item-icon-active><img src="~assets/img/tabbar/shopping_active.svg" alt=""></template>
        <template v-slot:item-text><div>购物车</div></template>
      </tab-bar-item>
      <tab-bar-item path="profile" activeColor="red">
        <template v-slot:item-icon><img src="~assets/img/tabbar/profile.svg" alt=""></template>
        <template v-slot:item-icon-active><img src="~assets/img/tabbar/profile_active.svg" alt=""></template>
        <template v-slot:item-text><div>我的</div></template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'

export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>
<style scoped>
</style>
