<template>
    <div class="mui-card">
        <div class="card-header">
            <div class="card-details">
                <div class="details-icon">
                    <img :src="data.smImg" alt="">
                </div>
                <div class="details-content">
                    <p class="details-author" v-text="data.headline"></p>
                    <p class="details-form" v-text="data.recommend"></p>
                </div>
            </div>
            <div class="card-option">
                <p v-text="data.visitedCount+'次播放'"></p>
            </div>
        </div>
        <video :src="data.video" class="video" controls="true" preload="metadata"></video>
        <div class="mui-card-content">
            <div class="mui-card-content-inner">
                <p class="card-content-title ell" v-text="data.title"></p>
                <p class="card-content-author">来自 <span style="color:#000;" v-text="data.author"></span></p>
                <div class="comment-box">
                    <p class="comment-time">{{data.time}}小时前</p>
                    <div class="comment-more">
                        <p class="iconfont icon-zan" v-text="data.zan"></p>
                        <p class="iconfont icon-weibiaoti" v-text="data.co"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
        }
    },
    props:["data"]

}
</script>
<style scoped>
.mui-card p{
    margin-bottom:0;
}
.card-header{
    display: flex;
    justify-content: space-between;
    padding:15px;
}
.card-header .card-details{
    display: flex;
}
.card-header .card-details .details-icon {
    width:15%;
    margin-right:10px;
}

.card-header .card-details .details-icon img{
    width:100%;
}
.card-header .card-details .details-content .details-author{
    color:#000;
}
.mui-card{
    text-align: left;
 }
.card-header .card-option{
    width:35%;
    text-align: right;
}
.mui-card-content-inner .card-content-title{
    color:#000;
}
.card-content-author{
    margin:10px 0 !important;
}
.comment-box{
    margin-top:10px;
    display:flex;
    justify-content: space-between;
}
.comment-more{
    width:32%;
    display:flex;
    justify-content: space-between;
}
.comment-more .iconfont:before{
    margin-right:5px;
}
.video{
    width:100%;
    position:relative;
    z-index: 1;
}
</style>
