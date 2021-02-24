<!--
 * @version: 1.0
 * @Author: East Wind
 * @Description: About this file
 * @Date: 2021-02-24 20:29:20
 * @LastEditors: East Wind
 * @LastEditTime: 2021-02-24 22:01:51
-->
<template>
  <div id="hy-swiper">
    <div class="swiper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
      <slot></slot>
    </div>
    <slot name="indicator"></slot>
    <div class="indicator">
      <slot name="indicator" v-if="showIndicator && slideCount>1">
        <div v-for="(item, index) in slideCount" class="indi-item" :class="{active:index===currentIndex-1}" :key="index"></div>
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Swiper',
  props: {
    interval: {
      type: Number,
      default: 3000
    },
    animDuration: {
      type: Number,
      default: 3000
    },
    moveRation: {
      type: Number,
      default: 0.25
    },
    showIndicator: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return{
      slideCount: 0,//元素个数
      totalWidth: 0,//swiper的宽度
      swiperSytle: {},//swiper的样式
      currentIndex: 1,//当前的index
      scrolling: false//是否正在滚动
    }
  },
  mounted () {
    // 1.操作DOM，在前后添加Slide
    setTimeout(() => {
      this.handleDom()

      // 2.开启定时器
      this.startTimer()
    }, 100);
  },
  methods: {
    /**
     * 定时器操作
     */
    startTimer () {
      this.playTimer = window.setInterval(() => {
        this.currentIndex++
        this.scrollContent(-this.currentIndex * this.totalWidth)
      }, this.interval)
    },

    /**
     * 滚动到正确的位置
     */
    scrollContent (currentPosition) {
      // 0.设置正在滚动
      this.scrolling = true

      // 1.开始滚动动画
      this.swiperSytle.transition = 'transform' + this.animDuration + 'ms'
      this.setTransform(currentPosition)

      // 2.判断滚动到的位置
      this.checkPosition()

      // 4.滚动完成
      this.scrolling = false
    },

    /**
     * 校验正确的位置
     */
    checkPosition () {
      window.setTimeout(() => {
        // 1.校验正确的位置
        this.swiperSytle.transition = '0ms'
        if (this.currentIndex >= this.slideCount + 1) {
          this.currentIndex = 1
          this.setTransform(-this.currentIndex * this.totalWidth)
        } else if (this.currentIndex <= 0) {
          this.currentIndex = this.slideCount
          this.setTransform(-this.currentIndex * this.totalWidth)
        }
      })
    },

    /**
     * 设置滚动的位置
     */
    setTransform (position) {
      this.swiperSytle.transform = `translated3d(@{position}px, 0, 0)`
      this.swiperSytle['-webkit-transform'] = `translated3d(@{position}px, 0, 0)`
      this.swiperSytle['-ms-transform'] = `translated3d(@{position}px, 0, 0)`
      console.log(position)
    },

    /**
     * 操作DOM，在DOM前后添加Slide
     */
    handleDom () {
      // 1.获取呀操作的元素
      let swiperEl = document.querySelector('.swiper')
      let slidesEls = swiperEl.getElementsByClassName('slide')

      // 2.保存个数
      this.slideCount = slidesEls.length

      // 3。如果大于1个，那么在前后分别添加一个slide
      if (this.slideCount > 1) {
        let cloneFirst = slidesEls[0].cloneNode(true)
        let cloneLast = slidesEls[this.slideCount - 1].cloneNode(true)
        swiperEl.insertBefore(cloneLast, slidesEls[0])
        swiperEl.appendChild(cloneFirst)
        this.totalWidth = swiperEl.offsetWidth
        this.swiperSytle = swiperEl.style
      }

      // 4.让swiper元素，显示第一个（目前是显示前面添加的最后一个元素）
      this.setTransform(-this.totalWidth)
    },

    /**
     * 拖动事件的处理
     */
    touchStart (e) {
      // 1.如果正在滚动，不可以拖动
      if (this.scrolling) return

      // 2.停止计时器
      this.stopTimer()

      // 3.保存开始滚动的地方
      this.startX = e.touches[0].pageX
    },

    touchMove (e) {
      // 1.计算出用户拖动的距离
      this.currentX = e.touches[0].pageX
      this.distance = this.currentX - this.startX
      let currentPosition = -this.currentIndex * this.totalWidth
      let moveDistance = this.distance + currentPosition

      // 2.的何止当前的位置
      this.setTransform(moveDistance)
    },

    touchEnd (e) {
      // 1.获取移动的距离
      let currentMove = Math.abs(this.distance)
      console.log(e)

      // 2.判断最终的距离
      if (this.distance === 0) {
        return
      } else if (this.distance > 0 && currentMove > this.totalWidth * this.moveRation) {
        this.currentIndex--
      } else if (this.distance < 0 && currentMove > this.totalWidth * this.moveRation) {
        this.currentIndex++
      }

      // 3.移动到正确的位置
      this.scrollContent(-this.currentIndex * this.totalWidth)

      // 4.移动完成后重新开启定时器
      this.startTimer()
    },

    /**
     * 控制上一个，下一个
     */
    previous () {
      this.changeItem(-1)
    },

    next () {
      this.changeItem(1)
    },

    changeItem (num) {
      // 1.移除定时器
      this.stopTimer()

      // 2. 修改index和位置
      this.currentIndex += num
      this.scrollContent(-this.currentIndex * this.totalWidth)

      // 3.添加定时器
      this.startTimer()
    }
  }
}
</script>
<style scoped>
  #hy-swiper {
    overflow: hidden;
    position: relative;
  }

  .swiper {
    display: flex;
  }

  .indicator {
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
    bottom: 8px;
  }

  .indi-item {
    box-sizing: border-box;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: #fff;
    line-height: 8px;
    text-align: center;
    font-size: 12px;
    margin: 0 5px;
  }

  .indi-item.active {
    background-color: rgba(212, 62, 46, 1.0);
  }
</style>
