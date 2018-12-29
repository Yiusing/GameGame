<template>
    <div class="mui-card" :style="fullBg?bgImg:''" :class="fullBg?'full-bg':''">
        <div class="header" v-show="item.title">{{item.title}}</div>
        <div class="mui-card-header mui-card-media" style="height:40vw" :style="bgImg" v-show="!fullBg" :class="type"></div>
        <div class="mui-card-content" :class="score">
            <div class="mui-card-content-inner">
                <p class="card-title ell" v-text="item.appName"></p>
                <p class="card-recommend" v-text="item.recommend"></p>
                <p class="card-content box-ell" v-text="item.describe"></p>
                <div class="card-sm-img">
                    <img :src="item.smImg">
                </div>
            </div>
            <div class="card-score" >
                <p class="comment" v-show="item.comment">{{item.comment}}条评价</p>
                <span class="score iconfont icon-xingxing">{{item.point.toFixed(1)}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            bgImg:{
                "background-image":""
            }
        }
    },
    props:["item","fullBg","score","type"],
    mounted(){
        this.bgImg["background-image"]=`url('${this.item.bgImg}')`
    }
}
</script>
<style scoped>
    p{
        margin-bottom:0;
    }
    .header{
        text-align: left;
        padding:10px;
    }
    .mui-card-content{
        position: relative;
    }
    .card-score{
        position:absolute;
        right:15px;
        top:50%;
        transform: translateY(-90%);
        display: flex;
        align-items: center;
    }
    .score{
        margin-left:10px;
        color:#d74b28;
        font-weight:600;
    }
    .mui-card-content-inner{
        text-align: left;
        padding-right: 120px;
    }
    .mui-card-content-inner{
        padding-top:10px;
    }
    .mui-card-content-inner .card-title{
        font-size:16px;  
        color:#000;
        font-weight:500;
    }
    .card-recommend{
        font-size:12px;
    }
    .full-bg .card-recommend{
         color:#d0d3d2;
    }
    .full-bg .card-score .comment{
        color:#fdfdfd;
    }
    .top .card-score{
        top:10px;
        transform:translateY(0);
    }
    .top .mui-card-content-inner{
        padding-right:15px;
    }
    .card-content{
        color:#000;
        margin-top:10px;
        font-size:12px;
        -webkit-line-clamp:2;
    }
    .full-bg{
        height:89vw;
        background-size:100%;
        background-repeat: no-repeat;
    }
    .full-bg .card-title,.full-bg .card-content{
        color:#fff;
    }
    .full-bg .mui-card-content{
        position: absolute;
        bottom:0;
        width:100%;
    }
    .sm.mui-card-header{
        height:19vw !important;
    }
    .card-sm-img img{
        width:100%;
    }
    .card-sm-img{
        width:15%;
        position:absolute;
        top:-65px;
    }
    .icon-xingxing:before{
        margin-right:5px;
    }
</style>
