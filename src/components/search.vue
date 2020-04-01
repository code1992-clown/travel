<template>
<router-link to="/search1">
  <van-search v-model="value" placeholder="请输入搜索关键词" disabled />
  </router-link>
</template>

<script>
export default {
data(){
  return{
    value:''
  }
}
}
</script>

<style>

</style>