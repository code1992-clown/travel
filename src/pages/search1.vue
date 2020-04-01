<template>
  <div>
    <div class="search1">
      <input type="text" placeholder="请输入目的地" v-model="keyword" @keyup.enter="submit"/>
      <router-link to="/">
        <p>取消</p>
      </router-link>
    </div>

    <div class="content" v-if="sh">
      <div v-for="(item) in list" :key="item.id">
        <router-link :to="'/detail/'+item.id">
          <div class="item">
            <img :src="item.name.image" alt />
            <div class="text">
              <div>{{item.name.name}}</div>
              <div>{{item.name.title}}</div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
      <div class="nosearch" v-else>
        <img src="" alt="没有此图片">
        <h1>miyou</h1>
      </div>

  </div>
</template>

<script>
import { searching } from "@/api/api.js";

export default {
  data(){
    return{
      sh:true,
      keyword:'',
      list:[]
    }
  },
  methods:{
    submit(){
      searching(this.keyword).then(res=>{
        
        if(res.data.length != 0 ){
this.list=res.data
this.sh=true
        }else{
this.sh=false
        }
        
      }).catch(err=>{
        console.log(err);
        
      })
      
    }
  }
};
</script>

<style scoped lang='less'>
@import "../assets/style/public.less";
.search1 {
  display: flex;
  height: 1rem;
  align-items: center;
  padding: 0 0.2rem;
  input {
    flex: 1;
    height: 0.5rem;
    border-radius: 5%;
    padding: 0.26rem;
    background-color: #ccc;
  }
}
</style>