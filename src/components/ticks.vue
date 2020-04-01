<template>
<div class="ticks">
  <div class="item" v-for="(item, index) in list" :key="index">
      <img :src="item.url" alt="">
  <p>{{item.title}}</p>
  </div>

</div>
</template>

<script>
export default {
data(){
  return{
    list:[
     {url:'https://gw.alicdn.com/tfs/TB1Nq50tqL7gK0jSZFBXXXZZpXa-210-171.png_110x10000.jpg_.webp',title:'机票'},
     {url:'https://gw.alicdn.com/tfs/TB1n256tAL0gK0jSZFxXXXWHVXa-210-171.png_110x10000.jpg_.webp',title:'酒店'},
     {url:'https://gw.alicdn.com/tfs/TB1_Ie3tEz1gK0jSZLeXXb9kVXa-210-171.png_110x10000.jpg_.webp',title:'火车票'},
     {url:'https://gw.alicdn.com/tfs/TB1v9m8tAT2gK0jSZFkXXcIQFXa-210-171.png_110x10000.jpg_.webp',title:'汽车票'},
     {url:'https://gw.alicdn.com/tfs/TB1OIC3tvb2gK0jSZK9XXaEgFXa-210-171.png_110x10000.jpg_.webp',title:'门票'},
    ]
  }
}
}
</script>

<style scoped lang='less'>
.ticks{
  display: flex;
  .item{
    display: flex;
    flex-direction: column;
    text-align: center;
    box-sizing: border-box;
    width: 19%;
    font-size: 1rem;
    margin: 0 0.3rem;
    img{
      width: 90%;
    }
  
  }
}
</style>