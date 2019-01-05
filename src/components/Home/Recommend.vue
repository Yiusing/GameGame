<template>
    <div class="recommend-box" >
        <div style="overflow:scroll;height:calc( 100vh - 165px );">
        <mt-loadmore :bottom-method="getMore" :bottom-all-loaded="allLoaded" ref="loadmore" :auto-fill="false">
            <Card v-for="(item,index) of list" :key="index" :item="item.item" :fullBg="index==0?true:false"></Card>
            <!-- 安利墙 -->
            <div class="recommend section">
                <h3 class="headline">安利墙</h3>
                <div class="anli swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(item , index) of anliList.swiperList" :key="index">
                            <anli-card :item="item"></anli-card>
                        </div>
                    </div>
                </div>
                <Card v-for="(item,index) of anliList.cardList" :key="index" :item="item.item" :fullBg="false"></Card>
            </div>   
            <!-- 玩家推荐 -->
            <div class="choice section">  
                <h3 class="headline">精选专题</h3>
                <div class="choice swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(item , index) of recommendList.swiperList" :key="index">
                            <Card :item="item.item" :fullBg="false" :score="'top'" :type="'sm'"></Card>
                        </div>
                    </div>
                </div>
                <Card v-for="(item,index) of recommendList.cardList" :key="index" :item="item.item" :fullBg="false"></Card>
            </div>
                <ul>
                    <li v-for="(item,index) in gameList" :key="index" >
                        <Card :item="item.item" :fullBg="false"></Card>
                    </li>
                </ul>
        </mt-loadmore>
        </div>
    </div>  
</template>
<script>
//引入卡片组件
import Card from '../sub/Card';
//引入Swiper组件
import Swiper from 'swiper'
//引入AnliCard组件
import AnliCard from '../sub/AnliCard'
export default {
    data(){
        return{
            list:[],
            anliList:{},
            recommendList:{},
            gameList:[],
            pno:0,
            pageSize:5,
            allLoaded:false
        }
    },
    components:{
        Card,
        AnliCard
    },
    created(){
        this.inital();
        this.$nextTick(function(){
            new Swiper('.anli.swiper-container', {
                slidesPerView:1.2,
                freeMode:true,
                observer:true,//修改swiper自己或子元素时，自动初始化swiper
                observeParents:true,//修改swiper的父元素时，自动初始化swiper
            })
            new Swiper('.choice.swiper-container', {
                 observer:true,//修改swiper自己或子元素时，自动初始化swiper
                observeParents:true,//修改swiper的父元素时，自动初始化swiper
                freeMode:true,
                slidesPerView:1.7,
                initialSlide :0
            })
           
        })
         
       
    },
    methods:{
        inital(){
            var pno = 1,
                pageSize = this.pageSize;
            this.axios.get("http://localhost:3000/recommend",{
                params:{
                    pno,
                    pageSize
                }
            }).then(res=>{
                this.list=res.data.data.topList;
                this.anliList=res.data.data.anliList;
                this.recommendList=res.data.data.recommendList;
                this.gameList = res.data.data.gameList
            })
        },

        getMore(){
            var pno = this.pno + 1,
                pageSize = this.pageSize,
                gameList = this.gameList;
            this.axios.get("http://localhost:3000/recommend",{
                params:{
                    pno,
                    pageSize
                }
            }).then(res=>{
                if(res.data.code==-2){  
                this.allLoaded = true
                  return;
                }
                this.gameList = gameList.concat(res.data.data.gameList);
                this.pno = pno;
                console.log(res)
                this.$refs.loadmore.onBottomLoaded();
            })
        }
    }
}
</script>
<style scoped>
    .headline{
        text-align: left;
        color:#000;
        font-size:16px;
    }
    .section{
        margin:20px 0;
    }
    .section .headline{
        margin-left:10px;
    }
    .recommend-box{
       
    }
</style>

