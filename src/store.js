import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isHideTabbar:true,
    isLogin:false
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
    }
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
