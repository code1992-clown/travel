<template>
 <swiper ref="mySwiper" :options="swiperOptions" class="swiper">
    <swiper-slide v-for="item in images" :key="item.id">
      <img :src="item.image" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>

</template>

<script>
import {banner} from '@/api/api.js'
export default {
 data() {
    return {
      swiperOptions: {
          pagination: {
            el: '.swiper-pagination',
             dynamicBullets: true,
          },
          autoplay:{
            delay: 1500
          },
          effect : 'coverflow',
  slidesPerView: 1,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 30,
    stretch: 10,
    depth: 60,
    modifier: 2,
    slideShadows : true
  },
          loop:true
        },
      images: [

      ]
    }
  },
 async mounted(){
  let w= await banner()
  this.images=w.data
  
  }
}
</script >

<style lang="less" scoped>
.swiper{
  width: 100vw;
  height: 53vw;
  border-radius: 3%;
  overflow: hidden;

  img{
    width: 100%;
    height: 100%;
    border-radius: 3%;
    overflow: hidden;
  }
}
</style>