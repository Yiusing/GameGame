import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home/Home.vue'
import Recommend from '../components/Home/Recommend.vue'
import Update from '../components/Home/Update.vue'
import Video from '../components/Home/Video.vue'
import GameStore from '../components/GameStore/GameStore.vue'
import Forum from '../components/Forum/Forum.vue'
import Search from '../components/Search/Search.vue'
import Profile from '../components/Profile/Profile.vue'
import Register from '../components/Login/Register.vue'
import Login from '../components/Login/Login.vue'
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
    {path:"/gamestore",component:GameStore},
    {path:"/forum",component:Forum},
    {path:"/search",component:Search},
    {path:"/profile",component:Profile},
    {path:"/register",component:Register},
    {path:"/login",component:Login}
  ]
})
