<template>
 <div class="loginpage">
    <form action="">
    <input type="number" placeholder="请输入手机号" v-model="phone"  v-bind="login">
   
    <input type="password" placeholder="请设置密码" v-model="pass">
    <input type="button" value="登录" v-bind="login" :disabled="!isregister" :class="{active:send,noactive:!send}">
    </form>
    <div>
    </div>
  </div>
</template>

<script>

export default {
  methods:{
    showToast(){
      this.$popus(this.phone)
    }
  },
  data(){
    return{
      phone:'',
      pass:'',
      isregister:false,
      send:false
    }
  },
  computed:{
    login(){
      if(this.phone != '' && this.pass != ''){
this.isregister=true
this.send=true
this.phone='账号或密码错误'
this.showToast()
      }else{
        this.isregister= false
        this.send=false
      }
    }
  }
}
</script>

<style lang='less' scoped>

.loginpage{
form{
  display: flex;
  flex-direction: column;
  input{
    box-sizing: border-box;
    line-height: 1rem;
    margin: 0.2rem;
    height: 1rem;
    border-radius:10px;
    border: 1px solid #ccc;
    padding: 10px;
    &:nth-child(3){
      padding: 0;
      background-color: green;
      opacity: 0.5;
      font-size: 0.5rem;
      color: white;
    }
  }
  .active{
    opacity: 1 !important;
  }
  .noactive{
    opacity: 0.5 !important;
  }
}


}

</style>