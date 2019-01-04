<template>
<div>
    <div class="sort-box">
        <div class="sort-box-inner">
            <div class="sort-box-content"> 
                <div class="classify" :class="classSel?'active':''" @touchstart="slideDn('classify')">全部</div>
                <p class="divide"></p>
                <div class="sort" :class="sortSel?'active':''" @touchstart="slideDn()">默认排序</div>
            </div>
            <div class="slide-content classify-content" v-show="classSel">
                <ul class="slide-items">
                    <li class="slide-item" v-for="(item,index) of classList" :key="index" :class="classIndex==index?'active':''" @touchstart="classJump(index)">{{item}}</li>
                </ul>
            </div>
            <div class="slide-content sort-content" v-show="sortSel">
                <ul class="slide-items">
                    <li class="slide-item" v-for="(item,index) of sortList" :key="index" :class="sortIndex==index?'active':''" @touchstart="sortJump(index)">{{item}}</li>
                </ul>
            </div>
        </div>
        <div class="mask" v-show="isShowMaks" @touchstart="hideAll()"></div>
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
            sortSel:false,
            isShowMaks:false,
            classList:["全部","角色扮演","休闲","动作","策略","模拟","益智","街机","冒险","卡牌","体育","竞速","音乐","单机","文字","桌面和棋类"],
            sortList:["默认排序","评分排序","时间排序"],
            sortIndex:0,
            classIndex:0
            
        }
    },
    components:{
        GameItem
    },
    methods:{
        loadMore() {
            //触底加载更多
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
        init(){     //初始化页面
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
            //分类排序功能
            if(type=="classify"){
                if(this.sortSel){
                    this.sortSel=false
                }else{
                    this.classSel=!this.classSel;
                }
            }else{
                if(this.classSel){
                    this.classSel=false
                }else{
                    this.sortSel=!this.sortSel;
                }
            }
            //显示遮罩
            this.isShowMaks=!this.isShowMaks;
        },
        hideAll(){
            //点击遮罩隐藏
            this.classSel=false;
            this.sortSel=false;
            this.isShowMaks=false;
        },
        classJump(i){
            //分类点击更换功能
            this.classIndex=i;
        },
        sortJump(i){
            //分类点击更换功能2
            this.sortIndex=i;
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
    background:#fff;
    border:1px solid transparent;
    border-top-color:#d6d6d6;
    border-bottom-color:#d6d6d6;
    position: relative;
    z-index: 2;
}
.sort-box-inner{
    position: relative;
    z-index: 2;
}
.sort-box-content{
    display: flex;
    align-items: center;
}
.classify,.sort{
    width:50%;
    font-size:13px;
    padding:10px 0;
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
    padding-bottom:10px;
    padding-right:10px;
    flex-wrap:wrap;
}
.classify-content .slide-items .slide-item{
    margin-left:15px;
    margin-top:10px;
    border:1px solid #e4e4e4;
    border-radius:5px;
    background:#f7f7f7;
    padding:5px;
    font-size:15px;
    text-align: center;
    line-height: 15px;
}
.sort-content .slide-items{
    flex-direction: column;
    padding:0;
}
.sort-content .slide-items .slide-item{
    padding:10px 0;
    font-size:15px;
}
.sort-content .slide-items .slide-item+.slide-item{
    border-top:1px solid #e4e4e4;
}
.sort-box .mask{
    width:100%;
    height:100vh;
    left:0;
    background:#000;
    position:absolute;
    opacity: .2;
}
.sort-content .slide-items .slide-item.active{
   background:#eeeeee;
}
.classify-content .slide-items .slide-item.active{
    background:#d74b28;
    color:#fff;
}
</style>
