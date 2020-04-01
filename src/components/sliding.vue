<template>
<div class="sliding" v-show="showS" @click="hide">
 <swiper ref="mySwiper" :options="swiperOptions" class="swiper" >
    <swiper-slide v-for="item in album" :key="item.id">
      <img :src="item.image" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>

  </div>
</template>

<script>
import bus from '@/bus/bus.js'
export default {
props:{
  album:Array
},
data(){
  return{
    showS:false,
     swiperOptions: {
          pagination: {
            el: '.swiper-pagination',
             type: 'fraction',
          },
       loop:true,
       effect : 'cube',
        },
  }
},
mounted(){
  bus.$emit('value',this.showS)
  bus.$on('val',(data=>{
    this.showS=data
  }))
},
methods:{
  hide(){
    this.showS=false
  }
}

}
</script>

<style scoped lang="less">
.sliding{
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #000;
  top: 0;
  z-index: 12;
  .swiper{
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  


  }
}


</style>