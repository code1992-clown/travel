<template>
  <div>
   
   <div class="name">
     <router-link to="/login">
     <div class="btn" v-if="show" >登录</div>
     </router-link>
     <div>
     </div>
   </div>
   <business/>
    <navfooter/>
  </div>
</template>

<script>
import navfooter from '@/components/navfooter'
import business from '@/components/business'
export default {
  components:{
    navfooter,
    business
  },
  data(){
    return{
      show:true
    }
  }

}
</script>

<style scoped lang='less'>
.name{
  background-color: #477bc7;
  padding: 1rem 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  .btn{
font-size: 1rem;
color: black;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);

  }
}
</style>