<template>
  <div class="covers">
   <div class="covers-bgc">
     <img :src="images" alt="">
   </div>
   <div class="covers-title">
     {{culum}}
   </div>
   <div class="covers-num" @click="imageShow">
     <span class="num"> {{album.length}}</span>  张图片
   </div>
   <!-- 小导航 -->
   <div class="ticks">
     <div class="item" v-for="(item,index) in list" :key="index">
       <img :src="item.url" alt="景点">
       <p>{{item.title}}</p>
     </div>
   </div>

  </div>
</template>

<script>
import bus from '@/bus/bus.js'
export default {
props:{
  culum:'',
  images:'',
  album:Array
},
data(){
return{
    list:[
     {url:'../../static/images/jingdian.png',title:'景点'},
     {url:'../../static/images/meishi.png',title:'美食'},
     {url:'../../static/images/shop.png',title:'购物'},
     {url:'../../static/images/zhusu.png',title:'住宿'},
    ],
  showing:''
}
},
methods:{
imageShow(){
this.showing=true
bus.$emit('val',this.showing)
}
},
mounted(){
 bus.$on('value',(data)=>{
   this.showing=data
   
 })
}
}
</script>

<style scoped lang='less'>
.covers{
  position: relative;
  width: 100%;
  .covers-bgc{
    img{
    width: 100%;
    height: 100%;
    }
  }
  .covers-title{
    position: absolute;
    top: 3rem;
    left: 0.5rem;
    font-size: 0.5rem;
    color: white;
    font-weight: 600;
  }
  .covers-num{
     position: absolute;
    top: 4.5rem;
    left: 0.5rem;
    color: white;
    font-size: 0.45rem;
    line-height: 0.55rem;
    .num{
      color: saddlebrown;
      font-size: 0.55rem;
      text-align: center;
    }
  }
  .ticks{
    position: absolute;
   bottom: 0.9rem;
  display: flex;
  color: white;
  justify-content: space-around;
  .item{
    
    display: flex;
    flex-direction: column;
    align-content: center;
    text-align: center;
    img{
      width: 60%;
      display: block;
      margin-left: 0.5rem;
    }
  }
}

}

</style>