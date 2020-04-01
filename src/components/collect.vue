<template>
  <div class="collect">
   <div  v-for="(item,index) in list" :key="index" >
     <div v-if="index==0?S:!S">
 <img :src="item.url" alt="">
     <p>{{item.title}}</p>
     </div>
  
   </div>
  </div>
</template>

<script>
export default {
data(){
  return{
    list:[
     {url:'../../static/images/shoucang.png',title:'未收藏'},
     {url:'../../static/images/shoucang1.png',title:'收藏'},
    ],
    S:false
  }
}
}
</script>

<style lang='less' scoped>
.collect{
  display: flex;
  justify-content: flex-end;
  width: 100%;
  div{
    display: flex;
    flex-direction: column;
    text-align: center;
    div{
      margin-right: 0.2rem;
       img{
      width: 1rem;
      height: 1rem;
      
    }
    }
   
  }
}
</style>