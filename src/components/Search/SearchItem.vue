<template>
    <div class="search-items">
        <div class="search-items-img">
            <img :src="itemData.img_url" alt="itemData.title">
            <div class="iconfont icon-weibiaoti search-items-comment" v-text="itemData.comment"></div>
        </div>
        <div class="search-items-content">
            <p class="search-items-title ell" v-text="itemData.title"></p>
            <p class="search-items-score iconfont icon-xingxing">{{itemData.score.toFixed(1)}}</p>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    props:["itemData"],
    mounted(){
        
    }
}
</script>
<style scoped>
.search-items-img{
    width:100%;
    position: relative;
    color:#fff;
}
.search-items-img img{
    max-width:100%;
    border-radius:5px;
}
.search-items .icon-weibiaoti:before{
    color:#fff;
    margin-right:5px;
}
.search-items-comment{
    position:absolute;
    right:.3rem;
    bottom:.3rem;
    font-size:12px;
}
.search-items-content{
    display: flex;
    justify-content: space-between;
}
.search-items-title{
    color:#000;
}
.icon-xingxing:before,.search-items-score{
    color:#d74b28;
    margin-right:5px;
}
</style>
