<template>
<div>
  <div class="revert" v-show="isShow">
    <img src="https://gw.alicdn.com/tfs/TB1kvAaxbsrBKNjSZFpXXcXhFXa-24-24.png" alt="" @click="back">
  </div>


  <div class="head" v-show="!isShow">
    <img src="https://gw.alicdn.com/tfs/TB1kvAaxbsrBKNjSZFpXXcXhFXa-24-24.png" alt="" @click="back">
    <div>{{culum}}</div>
  </div>

</div>

</template>

<script>
export default {
  props:{
culum:''
  },
data(){
  return{
    isShow:true
  }
},
methods:{
  back(){
    this.$router.go(-1)
  },
  revert(){
    var add = document.documentElement.scrollTop ||document.body.scrollTop    
    if(add>20){
      this.isShow=false
    }else{
      this.isShow=true
    }
    
  }
},
created(){
  window.addEventListener('scroll',this.revert)
}
}
</script>

<style lang='less' scoped>
.revert{
  position: absolute;
  left: 1rem;
  top: 0.5rem;
  transform: rotate(180deg);
}
.head{
background-color: #333;
height: 1.5rem;
width: 100%;
position: fixed;
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