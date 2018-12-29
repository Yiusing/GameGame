<template>
  <div id="app">
    <!-- 头部 -->
    <Header></Header>
    <!-- 主体 -->
    <router-view></router-view>
    <!-- 底部导航栏 -->
    <Tabbar v-show="isShow"></Tabbar>
  </div>
</template>

<script>
//引入公共头部组件
import Header from './components/Header/Header'
//引入公共顶部导航栏
import Tabbar from './components/sub/Tabbar'

export default {
  name: 'App',
  components: {
    Header,
    Tabbar
  },
  computed:{
    isShow(){
      return this.$store.getters.getIsHideTabbar;
    }
  },
  watch:{
      /*$route(to,from){ //跳转组件页面后，监听路由参数中对应的当前页面以及上一个页面
          console.log(to)
        if(to.name=='book'||to.name=='my'){ // to.name来获取当前所显示的页面，从而控制该显示或隐藏footerBar组件
           this.$store.dispatch('showFooter') // 利用派发全局state.showFooter的值来控制        }else{
           this.$store.dispatch('hideFooter')
        }
      }*/
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.ell{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.box-ell{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    text-overflow: ellipsis;
    white-space: normal;
    overflow: hidden;
}
/** 懒加载样式*/
img[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>
