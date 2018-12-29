<template>
    <div class="item-box">
        <div class="game-store">
            <div class="item-img">
                <img :src="item.img_url" alt="">
            </div>
            <div class="item-content">
                <p style="color:#000;font-size:15px;" v-text="item.appName"></p>
                <p style="font-size:13px;">{{item.classify|classify}}</p>
            </div>
            <div class="item-score iconfont icon-xingxing" v-text="item.point.toFixed(1)"></div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    props:["item"],
    filters:{
        //将分类数组转换为字符串
        classify(val){
            return val.join(",")
        }
    }
}
</script>
<style scoped>
.item-box{
    border-bottom:1px solid #d6d6d6;
    padding:10px;
    background:#fff;
}
.game-store{
    text-align: left;
    display: flex;
    position: relative;
}
.game-store .item-content{
    margin-left:10px;
}
.game-store .item-img{
    width:33vw;
    height:18vw;
}
.game-store .item-img img{
    width:100%;
    height:100%;
}
.game-store .item-score.icon-xingxing::before{
    margin-right:5px;
    color:#d74b28;
}
.game-store .item-score{
    position:absolute;
    right:0;
    top:0;
}
</style>
