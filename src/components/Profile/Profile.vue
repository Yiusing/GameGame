<template>
    <div class="profile">
        <div class="profile-top">
            <div class="user-top">
                <div class="avatar"></div>
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
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

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
    font-size:1.5rem;
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
    background:red;
    margin-right:1rem;
}
</style>
