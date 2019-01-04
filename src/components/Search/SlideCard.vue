<template>
    <div class="slide-card">
        <div class="slide-card-headline">
            <p class="slide-card-title" v-text="slideList.title"></p>
            <p class="slide-card-more">查看更多</p>
        </div>
        <div class="card swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) of slideList.items" :key="index">
                    <search-card :data="item"></search-card>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
//引入Swiper组件
import Swiper from 'swiper'
import SearchCard from './SearchCard'
export default {
    data(){
        return{

        }
    },
    props:["slideList"],
    mounted(){
       //setTimeout(()=>{
           new Swiper('.card.swiper-container', {
                slidesPerView:3.5,//显示的数量
                spaceBetween : 10,//卡片间隙
                freeMode:true,
                observer:true,//修改swiper自己或子元素时，自动初始化swiper
                observeParents:true,//修改swiper的父元素时，自动初始化swiper
            })
       //})
    },
    components:{
        SearchCard
    }
}
</script>
<style scoped>
.slide-card{
    padding:.8rem;
}
.slide-card-headline{
    display:flex;
    justify-content: space-between;
}
.slide-card-title{
    color:#000;
    font-size:1.2rem;
}
.slide-card-more{
    color:#d74b28;
}
</style>
