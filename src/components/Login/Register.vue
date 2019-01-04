<template>
    <div class="register">
        <header2 :headline="'新用户注册'"></header2>
        <div class="register-headline">
            <p class="logo">GameGame</p>
            <p class="logo-title">即刻加入游戏狂热者行列</p>
        </div>
        <div class="input-box">
            <p class="ctn">CN+86</p>
            <input type="tel" class="inputStyle" placeholder="请输入手机号码" v-model="tel" maxlength="11">
        </div>
        <div class="toLogin ">
            <router-link to="login" class="link-style icon-youjiantou">有账号? 去登录</router-link>
        </div>
        <button class="register-btn" :class="canReg?'active':''" @touchend="reg()">注册</button>
        <div class="others-login">
            <div class="weixin">
                <span class="iconfont icon-weixin"></span>微信
            </div>
            <div class="QQ">
               <span class="iconfont icon-QQ"></span>QQ
            </div>
            <div class="facebook">
                <span class="iconfont icon-facebook"></span>Facebook
            </div>
        </div>
    </div> 
</template>
<script>
import Header2 from '../Header/Header2'
import {Toast} from 'mint-ui'
export default {
    data(){
        return{
            canReg:false,
            tel:""
        }
    },
    components:{
        Header2
    },
    watch:{
        tel(val){
            //验证手机号码
            var reg = /^1[3-8]\d{9}$/
            this.canReg=reg.test(val);
        }
    },
    methods:{
        reg(){
            var user = this.tel;
            this.axios.post("http://localhost:3000/register","user="+user).then(res=>{
                var msg = Toast({
                    message: res.data.msg,
                    duration:1500
                });
                setTimeout(()=>{
                    msg.close();
                    if(res.data.code==1){
                        this.$router.push("login")
                    }
                },1500)
            })
        }
    }
}
</script>
<style scoped>
.register{
    padding:10px 10px 20px;
}
.register-headline{
    margin-top:3.2rem;
}
.logo-title{
    color:#d74b28;
}
.logo{
    margin-bottom:25px;
    font-size:3rem;
    color:#d74b28;
}
.inputStyle{
    background:transparent;
    outline: none;
    border:none;
    margin:0;
    border-bottom:1px solid #929292;
    padding-left:3.5rem;
}
.inputStyle:focus{
    border-bottom-color:#d74b28;
}
.input-box{
    display: flex;
    align-items: center;
    margin-top:3rem;
    position: relative;
}
.ctn{
    position:absolute;
}
.toLogin{
    float:right;
    margin-top:2rem;
}
.icon-youjiantou:after{
    border-color:#d74b28;
}
.register-btn{
    margin-top:2rem;
    width:100%;
    padding:.8rem 0;
    border-radius: 5px;
    border:none;
    background:#b6b5b5;
}
.register-btn.active{
    background:#d74b28;
    color:#fff;
}
.others-login{
    position:absolute;
    bottom:1rem;
    left:50%;
    transform:translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: space-around;
    width:100%;
}
.weixin,.QQ,.facebook{
    display: flex;
    flex-direction: column;
    line-height: 3rem;
}
.icon-weixin{
    color:#50b674;
}
.icon-QQ{
    color:#30a5dd;
}
.icon-facebook{
    color:#3a5a98;
}
.others-login .iconfont{
    font-size:3rem;
}
.link-style{
    color:#d74b28;
}
.link-style:active{
    opacity: .3;
}
</style>
