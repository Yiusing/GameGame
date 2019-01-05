<template>
    <div class="update" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
        <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading"
infinite-scroll-distance="1">
            <li v-for="(item,index) of updateList" :key="index">
                <update-card :data="item"></update-card>
            </li>
        </ul>
        <div  class="page-infinite-loading">
            <mt-spinner type="fading-circle" color="#d74b28" v-if="!loading">
            </mt-spinner>
            <p v-else>没有更多了</p>
        </div>
    </div>
</template>
<script>
import UpdateCard from '../sub/UpdateCard';
export default {
    data(){
        return{
            updateList:[],
            loading:false,
            wrapperHeight:0,
            pno:0,
            pageSize:3
        }
    },
    methods:{
        loadMore(){
            //触底加载更多
            var pno = this.pno;
            var pageSize= this.pageSize;
            pno++;
            this.pno=pno;
            this.axios.get("http://localhost:3000/update",{
                params:{
                    pno,
                    pageSize
                }
            }).then(res=>{
                console.log(res)
                if(res.data.code==-2){
                    this.loading = true;//若没有数据回来下次不执行加载更多
                    return;
                }
                this.updateList = this.updateList.concat(res.data.data.updateList)
                console.log(this.updateList)
            })
        },
    },
    mounted(){
        this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
    },
    components:{
        UpdateCard
    }
}
</script>
<style scoped>
.page-infinite-loading{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 13px;
}
.update{
    overflow: scroll;
}
</style>
