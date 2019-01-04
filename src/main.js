// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
//引入axios模块
import axios from 'axios'
import 'mint-ui/lib/style.css'
import "./lib/mui/css/mui.css"
import "./lib/mui/css/icons-extra.css"
import 'swiper/dist/css/swiper.min.css'
import store from './store'
//引入阿里图标
import './assets/iconfont/iconfont.css'

//引入mint-ui部分组件
/*import { Tabbar,Navbar, TabItem , Swipe , Loadmore ,Lazyload , InfiniteScroll , Spinner , Actionsheet } from 'mint-ui';
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Tabbar.name, Tabbar);
//Vue.component(Swipe.name,Swipe);
Vue.component(Loadmore.name, Loadmore);
Vue.component(Spinner.name, Spinner);
Vue.component(Actionsheet.name, Actionsheet);
Vue.use(Lazyload);
Vue.use(InfiniteScroll);
import { TabContainer, TabContainerItem } from 'mint-ui';
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
*/
Vue.config.productionTip = false

//配置axios模块
Vue.prototype.axios = axios;
axios.defaults.withCredentials=true;

//使用mint-ui ui库
Vue.use(Mint)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
