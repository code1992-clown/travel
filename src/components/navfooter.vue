<template>
    <van-tabbar v-model="active">
  <van-tabbar-item icon="home-o" to='/'>首页</van-tabbar-item>
  <van-tabbar-item icon="user-circle-o" to='/my'>我的</van-tabbar-item>
</van-tabbar>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style scoped lang="less">
.van-tabbar{
  background-color: #999;
  height: 13vw;
  position: fixed;
  .van-tabbar-item--active{
    color: red;
  }
}

</style>