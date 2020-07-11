<template>
  <div class="footer-guide">
      <span class="guide-item" :class="{on:$route.path === '/msite'}" @click="goto('/msite')">
        <span>
          <i class="iconfont icon-waimai"></i>
        </span>
        <span>外卖</span>
      </span>
      <span class="guide-item" :class="{on:$route.path === '/search'}" @click="goto('/search')">
        <span>
          <i class="iconfont icon-search1"></i>
        </span>
        <span>搜索</span>
      </span>
      <span class="guide-item" :class="{on:$route.path === '/order'}" @click="goto('/order')">
        <span>
          <i class="iconfont icon-dingdan"></i>
        </span>
        <span>订单</span>
      </span>
      <span class="guide-item" :class="{on:$route.path === '/profile'}" @click="goto('/profile')">
        <span>
          <i class="iconfont icon-user_active"></i>
        </span>
        <span>我的</span>
      </span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name:'FooterGuide',
    methods: {
      goto (path){
        //编程式路由跳转
        this.$router.push(path)
      }
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylue">
  @import '../../common/stylus/mixins.styl'
.footer-guide
  top-border-1px(#cccccc)
  display flex //将对象作为弹性伸缩盒显示
  position fixed //绝对定位 无论如何滑动滑轮都不会改变之前元素的位置
  left 0
  bottom 0
  height 50px
  width 100%
  .guide-item
    width 25%
    display flex
    flex-direction column	//灵活的项目将垂直显示，正如一个列一样
    text-align center //文字居中
    &.on
      color $green
    span
      margin-top 3px //外边距
      font-size 12px  //文字大小
      i 
        font-size 22px  //图标尺寸
</style>

