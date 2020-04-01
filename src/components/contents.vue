<template>
  <div class="content">
    <div  v-for="(item) in list" :key="item.id">
   <router-link :to="'/detail/'+item.id">
    <div class="item">
      <img :src="item.image" alt />
      <div class="text">
        <div>{{item.name}}</div>
        <div>{{item.title}}</div>
      </div>
    </div>
</router-link>
    </div>
 
 <div v-show="loading" class="loading">
   <div>
      <van-loading type="spinner" color="#1989fa" v-show="waibu" />
    <div v-show="!waibu" style="color:#333">没有更多.......</div>
   </div>

 </div>
  </div>
</template>

<script>
import { list } from "@/api/api.js";
export default {
  data() {
    return {
      waibu:true,
      list: [],
      pages:1,
      loading:false


    };
  },
  methods:{
load(){
  list(this.pages).then(res=>{
    
    if(res.data.results != null){
      if(this.pages == 1){
this.list=res.data.results
      }else{
        this.list=this.list.concat(res.data.results)
      }
      
    }
  }).catch(err=>{
    console.log(err);
    
  })
}
  },
 mounted() {
    this.load()
    
    window.onscroll=()=>{
      var scrollTop=document.documentElement.scrollTop || document.body.scrollTop
      // console.log(scrollTop);
      var windowHeight = document.documentElement.clientHeight || document.body.clientHeight
      var scrollH = document.documentElement.scrollHeight || document.body.scrollHeight
      if(scrollTop+windowHeight==scrollH){
        this.pages++
        this.loading=true
        console.log(this.pages);
        if(this.pages<5){
           this.load()
        }else{
         this.waibu=false
          
        }
      }
      
      
    }
  }
};
</script>

<style scoped lang='less'>
@import  '../assets/style/public.less';
 .loading{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 45%;
    margin-bottom: 70px;

  }
</style>