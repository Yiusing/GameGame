<template>
<div>
    <div class="sort-box">
        <div class="classify" :class="classSel?'active':''" @touchstart="slideDn('classify')">全部</div>
        <p class="divide"></p>
        <div class="sort" :class="sortSel?'active':''" @touchstart="slideDn">默认排序</div>
        <div class="slide-content">
            <ul class="slide-items">
                <li class="slide-item">123</li>
                <li class="slide-item">123</li>
                <li class="slide-item">123</li>
                <li class="slide-item">123</li>
            </ul>
        </div>
    </div>
    <div class="game-store" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
        <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading"
  infinite-scroll-distance="1">
            <li v-for="(item,index) of list" :key="index">
                <game-item :item="item.item"></game-item>
            </li>
        </ul>
        <div  class="page-infinite-loading">
            <mt-spinner type="fading-circle" color="#d74b28" v-if="!loading">
            </mt-spinner>
            <p v-else>没有更多了</p>
        </div>
    </div>
</div>
</template>
<script>
import GameItem from './GameItem';
export default {
    data(){
        return{
            loading:false,
            list:[],
            wrapperHeight:0,
            pno:0,
            pageSize:7,
            classSel:false,
            sortSel:false
        }
    },
    components:{
        GameItem
    },
    methods:{
        loadMore() {
            var pno = this.pno;
            var pageSize= this.pageSize;
            pno++;
            this.pno=pno;
            this.axios.get("http://localhost:3000/gamestore",{
                params:{
                    pno,
                    pageSize
                }
            }).then(res=>{
                if(res.data.code==-2){
                    this.loading = true;//若没有数据回来下次不执行加载更多
                    return;
                }
                this.list = this.list.concat(res.data.data.gameList)
            })
        },
        init(){
        this.axios.get("http://localhost:3000/gamestore",{
                params:{
                    pno:1,
                    pageSize:7
                }
            }).then(res=>{
                this.list = res.data.data.gameList
            })
        },
        slideDn(type){
            if(type=="classify"){
                this.classSel=!this.classSel;
            }else{
                this.sortSel=!this.sortSel;
            }
        }
    },
    
    mounted() {
      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
      this.init();
    }
}
</script>
<style scoped>
ul{
    list-style-type: none;    
}
.game-store{
    padding-bottom:55px;    
    overflow: scroll;
}
.page-infinite-loading{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 13px;
}
.sort-box{
    display: flex;
    background:#fff;
    border:1px solid transparent;
    border-top-color:#d6d6d6;
    border-bottom-color:#d6d6d6;
    padding:10px;
    height:100%;
    align-items: center;
    position: relative;
    z-index: 2;
}
.classify,.sort{
    width:50%;
    font-size:13px;
}
.classify.active,.sort.active{
    color:#d74b28;
}
.classify:after,.sort:after{
    margin-left:5px;
    display: inline-block;
    content:"";
    border:5px solid transparent;
    border-bottom:0;
    border-top-color:#000;
    transition:all .4s ease;
}
.classify.active:after,.sort.active:after{
    transform: rotateZ(180deg);
    border-top-color:#d74b28;
}
.divide{
    background:#d6d6d6;
    width:1px;
    height:20px;
    position: absolute;
    top:50%;
    left:50%;
    margin-left:0.5px;
    margin-top:-10px;
}
.slide-content{
    position:absolute;
    background:#fff;
    top:41px;
    left:0;
    width:100%;
    border-bottom:1px solid #d6d6d6;
}
.slide-items{
    display: flex;
    padding:10px;
}
.slide-items .slide-item{
    margin-left:10px;
    border:1px solid #e4e4e4;
    border-radius:5px;
    background:#f7f7f7;
    padding:3px;
    font-size:15px;
    text-align: center;
    line-height: 15px;
}
</style>
