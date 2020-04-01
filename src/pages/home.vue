<template>
  <div>
    <search/>
    <swipers/>
    <ticks/>
    <contents/>
    <navfooter />
  </div>
</template>

<script>
import navfooter from "@/components/navfooter"
import search from "@/components/search"
import swipers from "@/components/swipers"
import ticks from "@/components/ticks"
import contents from "@/components/contents"
export default {
components:{
  navfooter,
  search,
  swipers,
  ticks,
  contents
}
}
</script>

<style>

</style>