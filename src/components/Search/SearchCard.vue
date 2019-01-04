<template>
    <div class="search-card">
        <div class="avatar-box">
            <img :src="data.img_url" alt="">
        </div>
        <p class="search-author ell" v-text="data.author"></p>
        <p class="search-og ell" :class="data.userType==0?'normal':'star'" v-text="data.og"></p>
        <div class="btn">
            关注
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
.search-card{
    background:#fff;
    border-radius: 10px;
    width:100%;
    padding:.5rem;
    border:1px solid #eeeeee;
}
.avatar-box{
    width:50%;
    margin:0 auto;
}
.avatar-box img{
    max-width:100%;
    border-radius: 50%;
}
.search-author{
    color:#000;
}
.btn{
    width:70%;
    margin:0 auto;
    color:#fff;
    background:#d74b28;
    border-radius: 10px;;
    font-size:.8rem;
}
.search-og:before{
    display:inline-block;
    content:"";
    width:17px;
    height:17px;
    background-size:100%;
    vertical-align:text-top;
}
.normal:before{
    background-image:url("http://localhost:3000/images/search/icon.png");
}
.star:before{
    background-image:url("http://localhost:3000/images/search/icon2.png");
}
</style>
