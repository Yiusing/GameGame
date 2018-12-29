import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home/Home.vue'
import Recommend from '../components/Home/Recommend.vue'
import Update from '../components/Home/Update.vue'
import Video from '../components/Home/Video.vue'
import GameStore from '../components/GameStore/GameStore.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',redirect:"/Home"
      //,children:[
        //{path:"/",redirect:"/update"},
        //{path:"/update",component:Update},
        //{path:"/recommend",component:Recommend},
        //{path:"/video",component:Video}

      //]
    },
    {path:"/home",component:Home},
    {path:"/gamestore",component:GameStore}
  ]
})
