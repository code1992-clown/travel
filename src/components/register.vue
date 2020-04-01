<template>
  <div class="register">
    <form action>
      <input type="number" placeholder="请输入手机号" v-model="phone" />
      <input type="password" placeholder="请设置密码" v-model="pass" />
      <div class="yan">
        <input type="text" placeholder="请输入验证码" v-model="code"  />
        <input type="text" :value="codetext"  @click="emptycode" v-show="input" :class="{active:sssend,noactive:!sssend}" v-bind="sting" />
        <input type="text" :value="codetext"  @click="sendcode" :disabled="ssend" :class="{active:sssend,noactive:!sssend}" v-bind="sting" v-show="!input"/>
      </div>
      <input type="button"  value="注册并登录" v-bind="minitor" :disabled="!isregister" :class="{active:send,noactive:!send}" @click="reg"/>
    </form>
  </div>
</template>

<script>
import { getcode, register } from "@/api/api.js";

export default {
  data() {
    return {
      input:true,
      phone: "",
      pass: "",
      code: "",
      isregister: false,
      send: false,
      ssend: false,
      sssend: true,
      codetext:"发送验证码"
    };
  },
  computed: {
    minitor() {
      if (this.phone != "" && this.pass != "" && this.code != "") {
        this.isregister = true;
        this.send = true;
      } else {
        this.isregister = false;
        this.send = false;
      }
    },
    sting(){
      if(!(/^1(3|4|5|7|8)\d{9}$/.test(this.phone))){
        this.sssend=false
        this.input=true
      }else{
        this.sssend=true
        this.input=false
      }
    }
  },
  methods:{
    reg(){
     register({
       username:this.phone,
       code:this.code,
       password:this.pass
     }).then(res=>{
       console.log(res);
     }).catch(err=>{
       console.log(err);
       this.phone=err.code[0]
       this.showToast()
     })
      
    },
    emptycode(){
     console.log('首届号码不很强');
     
    },
    sendcode(){
      var countdown=60
     let codetime=()=>{
        if(countdown == 0){
          this.codetext="发送验证码"
          countdown=60
          this.ssend=false
          this.sssend=true
          return false
        }else{
          countdown--
          this.codetext=`${countdown}s后重新发送！`
          this.ssend=true
          this.sssend=false
        }
        setTimeout(() => {
        codetime()
      }, 1000)
      }
      codetime()
      getcode({
        mobile:this.phone
      }).then(res=>{
        console.log(res);
        
      }).catch(err=>{
        console.log(err);
        
      })
    }

  }
};
</script>

<style lang='less' scoped>
.register {
  form {
    display: flex;
    flex-direction: column;
    .yan {
      display: flex;
      input {
        &:nth-child(1) {
          width: 58vw;
        }
        &:nth-child(2) {
          width: 35vw;
          color: white;
          background: green;
          text-align: center;
          font-size: 0.5rem;
        }
         &:nth-child(3) {
          width: 35vw;
          color:white;
        }
      }
    }
    input {
      box-sizing: border-box;
      line-height: 1rem;
      margin: 0.2rem;
      height: 1rem;
      border-radius: 10px;
      border: 1px solid #ccc;
      padding: 10px;
      &:last-child {
        padding: 0;
        background-color: green;
        opacity: 0.5;
        font-size: 0.5rem;
        color: white;
        text-align: center;
      }
    }
  }
}
  .active{
    opacity: 1 !important;
  }
  .noactive{
    opacity: 0.5 !important;
  }
</style>