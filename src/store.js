import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isHideTabbar:true,//隐藏底部导航栏
    isLogin:false,//保存登录状态
    // tabSelect:"home"//当前
  },
  mutations: {
    hideTabbar(state){
        state.isHideTabbar=false
    },
    showTabbar(state){
        state.isHideTabbar=true
    },
    login(state){
        state.isLogin=true;
    },
    signout(state){
        state.isLogin=false
    },

  },
  actions: {

  },
  getters:{
      getIsHideTabbar(state){
          return state.isHideTabbar
      },
      getIsLogin(state){
          return state.isLogin
      }
  }
})
