<template>
    <div class="search" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
        <div class="banner">
            <mt-swipe :auto="4000" :show-indicators="true">
                <mt-swipe-item v-for="(item,index) of bannerList" :key="index">
                    <img :src="item" alt="">
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="search-box" v-for="(item,index) of items" :key="index">
            <div class="search-headline">
                <p class="search-headline-title">{{item.title}}</p>
                <p class="search-headline-more">查看更多</p>
            </div>
            <div class="search-items-box">
                <search-item v-for="(elem,i) of item.itemList" :key="i" :itemData="elem" class="top"></search-item>
            </div>
        </div>
        <slide-card :slideList="slideList[0]"></slide-card>
        <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading"
infinite-scroll-distance="10">
            <li v-for="(item,index) of moreList" :key="index">
                <div class="search-box">
                    <div class="search-headline">
                        <p class="search-headline-title">{{item.title}}</p>
                        <p class="search-headline-more">查看更多</p>
                    </div>
                    <div class="more swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="(elem,i) of item.data" :key="i">
                                <search-item :itemData="elem"></search-item>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <div  class="page-infinite-loading">
            <mt-spinner type="fading-circle" color="#d74b28" v-if="!loading">
            </mt-spinner>
            <p v-else>没有更多了</p>
        </div>
    </div>
</template>
<script>
//引入Swiper组件
import Swiper from 'swiper'
import SearchItem from './SearchItem'
import SlideCard from './SlideCard'
export default {
    data(){
        return{
            bannerList:[],
            items:[],
            slideList:[{title:""}],
            moreList:[],
            loading:false,
            wrapperHeight:0,
            pno:0,
            pageSize:3,
            swiper:{}
        }
    },
    components:{
        SearchItem,
        SlideCard
    },
    methods:{
        init(){
            this.axios.get("http://localhost:3000/search").then(res=>{
                //console.log(res)
                var {bannerList,items,slideList}=res.data.data;
                this.bannerList=bannerList;
                this.items=items;
                this.slideList=slideList;
            })
        },
        loadMore(){
            var pno = this.pno;
            var pageSize= this.pageSize;
            pno++;
            this.pno=pno;
            this.axios.get("http://localhost:3000/searchMore",{
                params:{
                    pno,
                    pageSize
                }
            }).then(res=>{
                console.log(res)
                if(res.data.code==-2){
                    this.loading = true;//若没有数据回来下次不执行加载更多
                    return;
                }
                this.moreList = this.moreList.concat(res.data.data.searchList)
                setTimeout(function(){
                    new Swiper('.more', {
                        slidesPerView:2.5,//显示的数量
                        spaceBetween : 10,//卡片间隙
                        freeMode:true,
                        observer:true,//修改swiper自己或子元素时，自动初始化swiper
                        observeParents:true,//修改swiper的父元素时，自动初始化swiper
                    })
                })
            })
        }
    },
    created(){
        //初始化数据
        this.init()
    },
    mounted(){ 
        this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
    },

}
</script>
<style>
.mint-swipe .mint-swipe-indicators .mint-swipe-indicator.is-active{
    opacity: 1;
}
</style>
<style scoped>
.search{
    padding-bottom:55px;
    overflow: scroll;
}
.banner{
    height:39vw;
}
.banner img{
    max-width:100%;
}
.search-box{
    background:#fff;
    padding:10px;
}
.search-box:not(:nth-child(2)){
    margin-top:.5rem;
}
.search-box .search-headline{
    display:flex;
    justify-content: space-between;
}
.search-headline-title{
    color:#000;
    font-size:1.2rem;
}
.search-headline-more{
    color:#d74b28;
    font-size:1rem;
}
.search-items-box{
    display:flex;
    flex-wrap:wrap;
    justify-content: space-between;
}
.top{
    width:48%;
}

.page-infinite-loading{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 13px;
}
</style>
