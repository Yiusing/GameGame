<template>
    <div class="vertify-code">
        <div class="model">
            <div class="model-header">
                <p class="model-header-title">请输入短信验证码</p>
                <span class="iconfont icon-cha" @touchstart="closeModel"></span>
            </div>
            <div class="model-input" v-if="!hasCheck">
                <input type="tel" class="code" v-model="code" maxlength="6" @click="end('code')" ref="codeInput">
                <ul class="model-box" :class="codeErr?'err':''">
                    <li class="box-item" v-text="code.slice(0,1)" :class="code.slice(0,1)!==''?'active':''"></li>
                    <li class="box-item" v-text="code.slice(1,2)" :class="code.slice(1,2)!==''?'active':''"></li>
                    <li class="box-item" v-text="code.slice(2,3)" :class="code.slice(2,3)!==''?'active':''"></li>
                    <li class="box-item" v-text="code.slice(3,4)" :class="code.slice(3,4)!==''?'active':''"></li>
                    <li class="box-item" v-text="code.slice(4,5)" :class="code.slice(4,5)!==''?'active':''"></li>
                    <li class="box-item" v-text="code.slice(5,6)" :class="code.slice(5,6)!==''?'active':''"></li>
                </ul>
            </div>
            <mt-spinner type="fading-circle" v-else class="loading-circle" color="#d74b28" :size="40"></mt-spinner>
            <p class="err-msg" v-show="codeErr">验证码错误</p>
            <div class="model-bottom">
                <p class="tips">短信验证码已经发送至{{tel}}</p>
                <p class="countSec" v-if="!canResend"><span>{{sec}}</span> 秒后可重新发送</p>
                <p class="resend" v-else @touchend="resendCode()">重新发送</p>
            </div>
        </div>
        <div class="mask"></div>
    </div>
</template>
<script>
import {Toast} from 'mint-ui';
import { Spinner } from 'mint-ui';
export default {
    data(){
        return{
            code:"",
            sec:60,
            canResend:false,
            newCode:"",
            codeErr:false,
            hasCheck:false
        }
    },
    props:["tel","rCode"],
    methods:{
        closeModel(){
            this.$emit("closeModel")
        },
        end(item) {
            //点击时让光标始终保持在最后一位
            var obj = document.getElementsByClassName(item)[0]
            obj.focus();
            var len = obj.value.length;

            if (document.selection) {
            var sel = obj.createTextRange();

            sel.moveStart('character', len);
            sel.collapse();
            sel.select();
            } else if (typeof obj.selectionStart === 'number' && typeof obj.selectionEnd === 'number') {
            obj.selectionStart = obj.selectionEnd = len;
            }
        },
        countSec(){
            //倒数重新发送时间
            var sec = parseInt(this.sec);
            var timer = setInterval(()=>{
                if(sec==1){
                    clearInterval(timer);
                    this.canResend=true;
                    return;
                }
                sec--;
                this.sec = sec;
            },1000)

        },
        resendCode(){
            //重新发送验证码
            this.sec=60;
            this.canResend=false;
            this.countSec();
            var rCode = Math.floor(Math.random()*(999999-100000)+100000);
            this.newCode=rCode;
            var msg = Toast({
                message: "验证码为:"+rCode,
                duration:5000,
                position:'top'
            });
            setTimeout(function(){
                msg.close();
            },5000)
        }
    },
    mounted(){
        this.$refs.codeInput.focus();
        this.countSec();
        this.newCode=this.rCode;
    },
    watch:{
        code(val){
            var newCode = this.newCode;
            if(val.length===6){
                if(val!=newCode){
                    //验证失败
                    this.codeErr=true;
                }else{
                    //验证成功
                    this.codeErr=false;
                    this.hasCheck=true;
                    setTimeout(()=>{
                        //发送请求判断是否存在该用户
                        this.axios.post("http://localhost:3000/login","tel="+this.tel).then(res=>{
                            if(res.data.code===1){
                                //登录成功，修改登录状态并且跳转路由
                                this.$store.commit("login")
                                this.$router.push("profile")
                            }else{
                                var msg = Toast({
                                    message:"该用户不存在",
                                    duration:1500
                                });
                                setTimeout(()=>{
                                    this.closeModel();
                                    msg.close();
                                },1500)
                            }
                        })
                    },2500)
                }
            }else{
                this.codeErr=false;
            }
        }
    }
}
</script>

<style scoped>
.loading-circle{
    position: absolute;
    left: 50%;
    top:50%;
    transform: translate(-50%,-50%);

}
.vertify-code{
    position:fixed;
    width:100%;
    height:100vh;
    top:0;
    left:0;
}
.model{
    position: absolute;
    z-index: 1000;
    background:#fff;
    width:90%;
    height:50vw;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    border-radius:10px;
    border:1px solid #ddd;
    padding:1rem;
}
.model-header-title{
    color:#000;
    font-size:1rem;
}
.model-header{
    position:relative;
}
.model-header .icon-cha{
    position:absolute;
    right:0;
    top:0;
    font-size:1.3rem;
    color:#b3b3b3;
}
.model-bottom{
    position:absolute;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    width:100%;
    padding-bottom:5px;
}
.model-bottom p{
    margin-bottom:0;
}
.resend{
    color:#d74b28;
}
.mask{
    height:100vh;
    width:100%;
    position:relative;
    z-index: 100;
    background:#000;
    opacity: .2;
}
.model-input{
    margin-top:1rem;
    position:relative;
}
.model-box{
    position:absolute;
    left:0;
    top:0;
    z-index: 1;
}
ul{
    list-style: none;
}
.code{
    position: relative;
    z-index: 2;
    border:none;
    outline:none;
    color:transparent;/*隐藏光标*/
    /* text-shadow:0 0 0 red; */
    background:transparent;
}
.model-box{
    display: flex;
    justify-content: space-between;
    width:100%;
}
.model-box .box-item{
    border:1px solid #bdbbbb;
    width:2.8rem;
    height:2.8rem;
    border-radius:5px;
    line-height:2.8rem;
    font-weight:700;
    font-size:1.2rem;
}
.err .box-item{
    border-color:red !important;
}
.model-box .box-item.active{
    border-color:#d74b28;
}
.countSec span{
    color:#d74b28;
}
.err-msg{
    color:red;
}
</style>
