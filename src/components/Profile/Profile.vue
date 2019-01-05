<template>
    <div class="profile">
        <div class="profile-top">
            <div class="user-top">
                <div class="avatar">
                    <img src="http://localhost:3000/images/avatar.jpg" alt="">
                </div>
                <div class="user-box">
                    <div class="user-details">
                        <p class="user-name">手机用户123456</p>
                        <p class="user-id">ID:123456</p>
                    </div>
                    <div class="user-att">
                        <ul class="att-items">
                            <li class="att-item">
                                <p class="att-count">2</p>
                                <p>关注</p>
                            </li>
                            <li class="att-item">
                                <p class="att-count">2</p>
                                <p>粉丝</p>
                            </li>
                            <li class="att-item">
                                <p class="att-count">2</p>
                                <p>收藏</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="user-bottom">
                <div class="user-zan">
                    <span class="iconfont icon-zan">0</span>
                    <span class="iconfont icon-xiaolian">0</span>
                </div>
                <div class="user-editor">
                    <a href="javascript:;" class="btn">编辑资料</a>
                </div>
            </div>
        </div>
        <div class="profile-bottom">
        <mt-navbar v-model="selected">
            <mt-tab-item id="comment">评价</mt-tab-item>
            <mt-tab-item id="topic">帖子</mt-tab-item>
            <mt-tab-item id="played">玩过</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selected" swipeable>
            <mt-tab-container-item id="comment">
                <div class="empty-box">
                    <div class="comment-empty"></div>
                    暂无内容
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="topic">
                <div class="empty-box">
                    <div class="topic-empty"></div>
                    暂无内容
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="played">
                <div class="empty-box">
                    <div class="played-empty"></div>
                    暂无内容
                </div>
            </mt-tab-container-item>
        </mt-tab-container>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            selected:"comment"
        }
    }    
}
</script>
<style scoped>
ul{
    list-style-type: none;
}
.profile-top{
    padding:1rem;
    background:#fff;
}
.user-top{
    border-bottom:1px solid #ddd;
    display: flex;
    padding-bottom:.5rem;
}
.user-box{
    flex:1;
}
.user-details{
    text-align: left;
}
.user-name{
    font-size:1.3rem;
    color:#000;
}
.profile p{
    margin-bottom:0;
}
.user-att{
    margin-top:1rem;
}
.user-id{
    margin-top:.4rem;
}
.att-items{
    display:flex;
    justify-content: space-between;
}
.att-item{
    flex:1;
}
.att-item~.att-item{
    border-left:1px solid #ddd;
}
.att-count{
    color:#000;
}
.avatar{
    width:20%;
    height:20vw;
    margin-right:1rem;
}
.avatar img{
    max-width:100%;
    border-radius: 50%;
}
.icon-zan:before,.icon-xiaolian:before{
    margin-right:5px;
    color:#999;
}
.user-bottom{
    display: flex;
    justify-content: space-between;
    padding-top:.5rem;
}
.user-editor .btn{
    color:#fff;
    display:block;
    background:#d74b28;
    font-size:.9rem;
    padding:.3rem .5rem;
    border-radius:1rem;
    font-weight:400;
}
.user-editor .btn:active{
    opacity: .5;
}
.profile-bottom{
    background:#fff;
    margin-top:.5rem;
}
.mint-navbar .mint-tab-item{
    color:#525252;
}
.mint-navbar .mint-tab-item.is-selected{
    color:#d74b28;
    border-color:#d74b28;
}
.empty-box{
    height:50vw;
    width:100%;
    display: flex;
    flex-direction: column;
    padding-bottom:1.5rem;    
}
.comment-empty,.topic-empty,.played-empty{
    width:100%;
    height:100%;
    background-size:40%;
    background-repeat: no-repeat;
    background-position: center;
}
.comment-empty{
    background-image:url("http://localhost:3000/images/profile/1.png")
}
.topic-empty{
    background-image:url("http://localhost:3000/images/profile/2.png")
}
.played-empty{
    background-image:url("http://localhost:3000/images/profile/3.png")
}
</style>
