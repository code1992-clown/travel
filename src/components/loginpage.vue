<template>
  <div>
    <div class="switch">
      <router-link to="/loginend">
      <div>登录</div>
      </router-link>
      <router-link to="/register">
      <div>注册</div>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components:{
  }

}
</script>

<style lang="less" scoped>
.switch{
  display: flex;
  justify-content: space-evenly;
  margin-top: 50px;
  div{
    flex: 1;
      font-size: 25px;

    text-align: center;
  }
}

</style>