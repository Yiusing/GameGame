<template>
  <div class="header">
    <h3 class="header-title" v-text="data"></h3>
    <span class="mui-icon" :class="iconType"></span>
  </div>
</template>
<script>
export default {
    data(){
        return{}
    },
    props:["data","iconType"]
}
</script>
<style scoped>
    .header{
        background:#d74b28;
        padding:15px 0;
        position: relative;
    }
    .header-title{
        color:#fff;
        font-weight:500;
        font-size:1.2rem;
    }
    .mui-icon{
        color:#fff;
        position:absolute;
        right:5%;
        top:50%;
        transform: translateY(-50%);
    }
</style>
