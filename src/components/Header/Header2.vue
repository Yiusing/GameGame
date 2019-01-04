<template>
    <div class="login-header iconfont icon-shezhi ">
       <span class="fanhui-icon" @touchstart="backward"></span>
       {{headline}}
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    props:["headline"],
    methods:{
        backward(){
            this.$router.go(-1)
        }
    }
}
</script>
<style scoped>
.login-header{
    font-size:1.3rem;
    position: relative;
}
.icon-shezhi:before{
    position:absolute;
    right:10px;
    font-size:1.2rem;
}
.fanhui-icon{
    position: absolute;
    left:0;
    top:50%;
    height:100%;
    width:10%;
    transform:translateY(-50%);
}
.fanhui-icon:after{
    display: inline-block;
    content:"";
    position:absolute;
    border-bottom:1px solid #000000;
    border-left:1px solid #000;
    left:10px;
    top:50%;
    width:10px;
    height:10px;
    transform: translateY(-50%) rotate(45deg);
}
</style>
