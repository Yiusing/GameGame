<template>
    <div class="mui-card">
        <div class="card-header">
            <div class="card-details">
                <div class="details-icon">
                    <img src="http://localhost:3000/images/update/1_icon.png" alt="">
                </div>
                <div class="details-content">
                    <p class="details-author">叫我万岁爷</p>
                    <p class="details-form">编辑推荐</p>
                </div>
            </div>
            <div class="card-option">
                <span class="iconfont icon-diandiandian" @click="sheetVisible=true"></span>
                <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
                <p>215次浏览</p>
            </div>
        </div>
        <div class="mui-card-header mui-card-media" style="height:40vw;background-image:url('http://localhost:3000/images/update/1.jpg')"></div>
        <div class="mui-card-content">
            <div class="mui-card-content-inner">
                <p class="card-content-title">真实模拟清宫帝王，这游戏满足你的一切想象！</p>
                <p class="card-content-author">来自 <span style="color:#000;">星星野草</span></p>
                <p class="card-content-details box-ell">很多都是个人吐槽 很多废话 请见谅
                    玩了七天 签到七天之后感觉无事可做 (´._.｀)特别是定榜结束活动暂时也没了 就很……空虚
                    我充了六块拿了个兰陵王，我玩手游一般就拿个首充，算是比较克制。拿到手的时候感觉还是不错的，稍微升了几级之后感觉跟没氪没什么区别。也可能是我充的不够٩(°̀ᗝ°́)و
                    定榜前一两天的时候，我在四百左右徘徊，想着趁最后两天肝一肝，挤挤前两百。但是他不充钱真的很难肝へ•́ཀ•̀و升国力无非过关后宫。但是他那个征兵啊，真的不想再说了。时间巨特么长，你说兵也多了过关的消耗也大了啊，我的天。以前一百万的兵可以撑很久，现在连半关都过不去了……想升过力只能等征兵啊。然后是后宫皇子，后宫翻牌加亲密都还好  出去微服什么的送的还挺多 那个皇子的活力是真的不够！！！特别是你的皇子资质至少百里挑一还有个万众的时候へ•́ཀ•̀و没有活力怎么办 花金买嘛。而且皇子的坑一开始也太少了 我开了四个第五个要1500 我放弃了ↁ_ↁ
                    在说说这个金，我这算是微氪 比没氪过的好歹还撑了一段时间，一开始加联盟，全是只加氪金大佬或是国力多少多少以上的 根本没机会进 好嘛 大不了自己建 2000金へ•́ཀ•̀و  我又放弃了 后来好不容易加了联盟 盟主要求天天高建200金 现在我们来算比账 假设一天给你800金 你联盟花了200贪官160皇子120的活力可以买三个 钱票跟兵各限购20 每个20金 总之就是不够用。
                    当离定榜还有四个小时的时候我放弃了挣扎，拼死拼活的升到了三百七十多，想想还有一百七十要升就感觉痛苦。本来前几天榜上一直是那个v5直到后面几天本来在后面的人 趴！冲钱冲到了v6直接就到榜一了 即使玩的在早又如何呢  你以为你比别人多签到一天就有优势了吗ↁ_ↁ 后来居上的人比比皆是
                    如果这个游戏没有世界就真的是个单机游戏了 联盟根本没人聊 只在乎你今天是不是高建 之前看世界聊天有个人进联盟半小时还没有建设就直接被踢了 更有甚者一开始建联盟的时候为了刷等级不停地加人踢人 世界是你在任务完之后唯一可以轻松的地方。
                    游戏其实还是挺好玩的 我也期待着他下次的新玩法 到时候再见吧 各位
                    以上观点都是自己这几天玩下来的感受 如果有什么不同的看法可以在下面评论ꉂ(ˊᗜˋ*)
                    </p>
                <div class="comment-box">
                    <p class="comment-time">8小时前</p>
                    <div class="comment-more">
                        <p class="iconfont icon-zan">14</p>
                        <p class="iconfont icon-weibiaoti">11</p>
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
            sheetVisible:false,
            actions:[{name:"来自编辑推荐"}]
        }
    }    
}
</script>
<style scoped>
.mui-card p{
    margin-bottom:0;
}
.card-header{
    display: flex;
    justify-content: space-between;
    padding:15px;
}
.card-header .card-details{
    display: flex;
}
.card-header .card-details .details-icon {
    width:15%;
    margin-right:10px;
}

.card-header .card-details .details-icon img{
    width:100%;
}
.card-header .card-details .details-content .details-author{
    color:#000;
}
.mui-card{
    text-align: left;
}
.card-header .card-option{
    width:30%;
    text-align: right;
}
.mui-card-content-inner .card-content-title{
    color:#000;
}
.card-content-author{
    margin:10px 0 !important;
}
.comment-box{
    margin-top:10px;
    display:flex;
    justify-content: space-between;
}
.comment-more{
    width:32%;
    display:flex;
    justify-content: space-between;
}
.comment-more .iconfont:before{
    margin-right:5px;
}
</style>
