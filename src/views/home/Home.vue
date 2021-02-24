<!--
 * @version: 1.0
 * @Author: East Wind
 * @Description: About this file
 * @Date: 2021-02-22 13:51:54
 * @LastEditors: East Wind
 * @LastEditTime: 2021-02-24 21:51:42
-->
<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center><p>购物街</p></template>
    </nav-bar>
    <swiper>
      <swiper-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import { getHomeMultidata } from 'network/home'
import { Swiper, SwiperItem } from 'components/common/swiper'

export default {
  name: 'Home',
  components: {
    NavBar,
    Swiper,
    SwiperItem
  },
  data () {
    return {
      banners: [],
      recommends: []
    }
  },
  created () {
    // 1.请求多个数据
    getHomeMultidata()
      .then(res => {
        console.log(res)
        // this.result = res
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
        console.log('----------------getHomeMultidata')
        console.log(this.banners[0].image)
      })
  }
}
</script>
<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: white;
}
</style>
