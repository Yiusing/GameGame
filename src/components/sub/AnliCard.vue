<template>
<div class="mui-card">
    <div class="mui-card-content">
        <div class="mui-card-content-inner">
           <div class="title">
               <div class="title-icon">
                   <img :src="item.icon">
               </div>
               <div class="title-box">
                   <p class="titile-headline" v-text="item.title"></p>
                   <div class="title-star">
                       <div class="star-before">★★★★★</div>
                       <div class="star-after" :style="`width:${item.score}%;`">★★★★★</div>
                   </div>
               </div>
           </div>
           <div class="content box-ell" v-text="item.comment">
               
           </div>
           <div class="others">
               <div class="zan iconfont icon-zan" v-text="item.zan"></div>
               <div class="author hengxian" v-text="item.author"></div>
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
    props:["item"]
}
</script>
<style scoped>
.titile-headline,.others .author,.content{
    color:#000;
}
.mui-card{
    text-align: left;
}
.title{
    display: flex;
}
.title-icon{
    width:15%;
    margin-right:10px;
}
.title-icon img{
    width:100%;
}
.title-box .titile-headline{
    margin-bottom:0;
}
.title-star{
    position:relative;
    color:#dadada;
    width: 58px;
}
.star-after{
    position: absolute;
    top:0;
    color:#d74b28;
    width:80%;
    overflow: hidden;
}
.others{
    margin-top:10px;
    display:flex;
    justify-content: space-between;
}
.icon-zan:before{
    margin-right:5px;
}
.hengxian{
    position: relative;
    display:flex;
    align-items: center;
}
.hengxian::before{
    display: inline-block;
    background:#333;
    width:30px;
    height:1px;
    content:"";
    margin-right:5px;
}
</style>
