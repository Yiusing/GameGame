<template>
    <mt-tabbar fixed class="mytab" v-model="selected">
        <mt-tab-item id="home">
            <span slot="icon" class="iconfont icon-file-text"></span>
            首页
        </mt-tab-item> 
        <mt-tab-item id="gamestore">
            <span slot="icon" class="iconfont icon-ku"></span>
            游戏库
        </mt-tab-item>
        <mt-tab-item id="forum">
            <span slot="icon" class="iconfont icon-luntan"></span>    
            论坛
        </mt-tab-item>
        <mt-tab-item id="search">
            <span slot="icon" class="iconfont icon-faxian"></span>  
            发现
        </mt-tab-item>
        <mt-tab-item id="profile">
            <span slot="icon" class="iconfont icon-wo"></span>        
            我
        </mt-tab-item>
    </mt-tabbar>
</template>
<script>
export default {
    data(){
        return{
            selected:"home"
        }
    },
    watch:{
        selected(val){
            //判断用户是否登录，若未登录则跳转登陆页面
            if(val=="profile"){
                if(!this.isLogin){
                    this.$router.push("register")
                }else{
                    this.$router.push("profile")
                }
            }else{
                //根据选择的item跳转对应路由
                this.$router.push(val)
                //保存当前选择的item
                // sessionStorage.setItem('navTabIndex',val)
            }
        },
        $route(to,from){ //跳转组件页面后，监听路由参数中对应的当前页面以及上一个页面
           this.selected=to.path.slice(1)
        } 
    },
    computed:{
        isLogin(){
            return this.$store.getters.getIsLogin;
        }
    },
    created(){
        // var navTabIndex = sessionStorage.getItem('navTabIndex')
        // if(!navTabIndex){
        //     this.selected="home"
        // }else{
        //     this.selected=navTabIndex
        // }
    }
}
</script>
<style scoped>
.iconfont{
    font-size:21px;
}
.mint-tabbar .mint-tab-item{
    color:#666666;
}
.mint-tabbar > .mint-tab-item.is-selected{
    background-color: transparent;
    color:#d74b28;
}
</style>
