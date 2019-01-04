<template>
<div>
    <div class="login">
        <header2 :headline="'GameGame登录'"></header2>
        <div class="login-headline">
            <p class="logo">GameGame</p>
            <p class="logo-title">即刻加入游戏狂热者行列</p>
        </div>
        <div class="input-box">
            <mt-navbar v-model="selected">
                <mt-tab-item id="phone">手机号登录</mt-tab-item>
                <mt-tab-item id="email">邮箱登录</mt-tab-item>
            </mt-navbar>
            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="phone">
                    <div class="input-inner-box">
                        <p class="ctn">CN+86</p>
                        <input type="tel" class="inputStyle" placeholder="请输入手机号码" v-model="tel" maxlength="11">
                    </div>
                </mt-tab-container-item>
                <mt-tab-container-item id="email">
                   <div class="input-inner-box email">
                        <input type="text" class="inputStyle" placeholder="请输入邮箱地址" v-model="email">
                        <input type="password" class="inputStyle" placeholder="请输入登录密码" v-model="pwd">
                    </div>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
        <button class="login-btn" :class="canReg?'active':''" v-show="selected=='phone'" @touchend="getCode()">获取验证码</button>
        <button class="login-btn" :class="email!==''&&pwd!==''?'active':''" v-show="selected=='email'">登录</button>
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
    <vertify-code v-if="canLogin" :tel="tel" @closeModel="close" :rCode="rCode"></vertify-code>
</div>
</template>
<script>
import Header2 from '../Header/Header2'
import VertifyCode from './VertifyCode'
import { Indicator } from 'mint-ui';
import {Toast} from 'mint-ui'
export default {
    data(){
        return{
            canReg:false,
            tel:"",
            selected:"phone",
            canReg2:false,
            email:"",
            pwd:"",
            canLogin:false,
            rCode:""
        }
    },
    methods:{
        getCode(){
            Indicator.open({
                spinnerType: 'fading-circle'
            });
            var rCode = Math.floor(Math.random()*(999999-100000)+100000)
            setTimeout(()=>{
                Indicator.close();
                var msg = Toast({
                    message: "验证码为:"+rCode,
                    duration:5000,
                    position:'top'
                });
                setTimeout(function(){
                    msg.close();
                },5000)
                this.canLogin=true;
                this.rCode=rCode;
            },1500)
        },
        close(){
            this.canLogin=false;
        }
    },
    components:{
        Header2,
        VertifyCode
    },
    watch:{
        tel(val){
            //验证手机号码
            var reg = /^1[3-8]\d{9}$/
            this.canReg=reg.test(val);
        }
    },
}
</script>
<style scoped>
.login{
    padding:10px 10px 20px;
}

.logo-title{
    color:#d74b28;
}
.logo{
    margin-bottom:25px;
    font-size:3rem;
    color:#d74b28;
}
.login-headline{
    margin-top:3rem;
}
.login-btn{
    margin-top:2rem;
    width:100%;
    padding:.8rem 0;
    border-radius: 5px;
    border:none;
    background:#b6b5b5;
    pointer-events: none;
}
.login-btn.active{
    background:#d74b28;
    color:#fff;
    pointer-events: auto;
}
.login-btn.active:active{
    opacity: .8;
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
    margin-top:3rem;
    position: relative;
}
.ctn{
    position:absolute;
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
.input-inner-box{
    margin-top:1rem;
    display: flex;
    align-items: center;
}
.mint-navbar{
    background:transparent;
}
.mint-navbar .mint-tab-item.is-selected{
    color:#d74b28;
    border-color:#d74b28;
}
.mint-tab-item{
    color:#000;
}
.input-inner-box.email{
    flex-direction: column;
}
.input-inner-box.email .inputStyle{
    padding:1.5rem 0;
}
</style>
