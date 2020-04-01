<template>
  <div>
    <covers  :culum='culum' :images='images' :album='album'/>
    <revert :culum='culum'/>
    <sliding :album='album' />
    <collect />
    <speech  :culum='culum' :lecturer='lecturer' :article='article'/>
  </div>
</template>

<script>
import covers from '@/components/covers'
import revert from '@/components/revert'
import sliding from '@/components/sliding'
import collect from '@/components/collect'
import speech from '@/components/speech'
import {goods} from '@/api/api.js'
export default {

components:{
covers,
revert,
sliding,
collect,
speech
},
data(){
  return{
productId:'',
culum:'',
images:'',
album:[],
lecturer:'',
article:''
  }
},
created(){
this.productId=this.$route.params.id

},
async mounted(){
  let w = await goods(this.productId)
  this.culum=w.data.curriculum
  this.images=w.data.image
  this.album=w.data.images
  this.lecturer=w.data.lecturer
  this.article=w.data.goods_desc
}
}
</script>

<style>

</style>