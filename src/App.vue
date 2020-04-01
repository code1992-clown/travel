<template>
  <div id="app">
    <keep-alive v-if="$route.meta.keepAlive">
    <router-view/>
    </keep-alive>
    <keep-alive v-if="!$route.meta.keepAlive">
    <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  font-size: 14px;
}
img{
  max-width: 100vw;
  border-radius: 3%;
}
</style>
