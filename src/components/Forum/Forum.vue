<template>
    <div class="forum">
        <div class="forum-card" v-for="(item,index) of list" :key="index">
            <div class="forum-title" v-text="item.title">
                
            </div>
            <ul class="forum-items">
                <li class="forum-item" v-for="(elem,i) of item.items" :key="i">
                    <span class="forum-img">
                        <img :src="elem.img_url" :alt="elem.title">
                    </span>
                    <span class="forum-content ell" v-text="elem.title"></span>
                </li>
            </ul>
        </div>
    </div>    
</template>
<script>
export default {
    data(){
        return{
            list:[]
        }
    },
    mounted(){
        this.axios.get("http://localhost:3000/forum").then(res=>{
            this.list = res.data.data.list;
        })
    }
}
</script>
<style scoped>
ul{
    list-style:none;
}
.forum{
    text-align: left;
    padding-bottom: 55px
}
.forum-card{
    background:#fff;
    padding:.8rem;
}
.forum-title{
    margin-bottom:.8rem;
    position: relative;
}
.forum-title:after{
    display: inline-block;
    content:"";
    width:10px;
    height:10px;
    border-bottom:1px solid #000;
    border-right:1px solid #000;
    transform: rotateZ(-45deg);
    position:absolute;
    right:10px;
    top:50%;
    margin-top:-5px;
}
.forum-items{
    display: flex;
    flex-wrap: wrap;
}
.forum-item{
    border-top:1px solid #eeeeee;
    width:50%;
    box-sizing: border-box;
    padding:5px;
    display: flex;
    align-items: center;
    position: relative;
}
.forum-img{
    width:2rem;
    display: inline-block;
}
.forum-img img{
    max-width:100%;
    border-radius:50%;
}
.forum-content{
    font-size:.9rem;
    margin-left:.5rem;
    margin-right:.5rem;
}
.forum-item:nth-child(2n-1):after{
    display: inline-block;
    content:"";
    width:1px;
    height:50%;
    background:#eeeeee;
    position: absolute;
    right:0;
}
</style>
