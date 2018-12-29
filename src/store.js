import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isHideTabbar:true
  },
  mutations: {
    hideTabbar(state){
        state.isHideTabbar=false
    },
    showTabbar(state){
        state.isHideTabbar=true
    },
  },
  actions: {

  },
  getters:{
      getIsHideTabbar(state){
          return state.isHideTabbar
      }
  }
})
