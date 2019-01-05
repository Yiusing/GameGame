<template>
    <div class="home-page">
        <mt-navbar v-model="selected">
            <mt-tab-item id="update">动态</mt-tab-item>
            <mt-tab-item id="recommend">推荐</mt-tab-item>
            <mt-tab-item id="video">视频</mt-tab-item>
        </mt-navbar>
        <!-- <router-view class="view"></router-view> -->
       <mt-tab-container v-model="selected" swipeable>
            <mt-tab-container-item id="update">
                <Update></Update>
            </mt-tab-container-item>
            <mt-tab-container-item id="recommend">
                <Recommend></Recommend>
            </mt-tab-container-item>
            <mt-tab-container-item id="video">
                <Video></Video>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
<script>
import Recommend from './Recommend';
import Update from './Update';
import Video from './Video';
export default {
    data(){
        return{
            selected:"update",
            active:"tab-container1"
        }
    },
    methods:{
       
    },
    watch:{
        // selected(val){
        //     this.$router.push(val)
        // }
    },
    components:{
        Recommend,
        Update,
        Video
    }
}
</script>
<style scoped>
.mint-navbar .mint-tab-item.is-selected{
    color:#d74b28;
    border-bottom-color: #d74b28;
}
.mint-navbar .mint-tab-item{
    color:#666666;
}
.mint-tab-container{
    padding-bottom:55px;
    padding-top:4px; 
}

</style>
