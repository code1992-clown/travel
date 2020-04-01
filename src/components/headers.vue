<template>
  <div>

   <div class="head">
    <img src="https://gw.alicdn.com/tfs/TB1kvAaxbsrBKNjSZFpXXcXhFXa-24-24.png" alt=""  @click="back">
    <div>登录</div>
  </div>


  </div>
</template>

<script>
export default {
methods:{
  back(){
    this.$router.go(-1)
  }
}
}
</script>

<style lang='less' scoped>
 .head{
background-color: #333;
height: 1.5rem;
width: 100%;
position: relative;
top: 0;
left: 0;
display: flex;
text-align: center;
align-items: center;
justify-content: center;
color: white;

img{
  transform:rotate(180deg);
  position: absolute;
  left: 1rem;
  top: 0.5rem;
}
}
</style>