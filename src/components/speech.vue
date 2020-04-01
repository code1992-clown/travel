<template>
<div>
  <div class="speech">
<div>
  <p>{{culum}}</p>
  <p>{{lecturer}}</p>
</div>
<div class="audi">
  <img v-if="playing" src="../../static/images/stop.png" alt="" @click="play">
  <img  v-if="!playing" src="../../static/images/play.png" alt="" @click="suspen">
  <audio :src="aispeech" ref="audio" @ended="songend"></audio>
</div>
  </div>

  <div class="btn" v-html="article" ref="box" >

  </div>

  </div>
</template>

<script>
import { speechend } from '@/api/api.js'
export default {
  props:{
   culum:'',
   lecturer:'',
   article:''
  },
  data(){
  return{
      list:[
     {url:'../../static/images/play.png',title:'播放'},
     {url:'../../static/images/stop.png',title:'暂停'},
    ],
    playing:true,
    textcon:'',
    aispeech:''
    
  }
},
methods:{
  voice(){
    var box = this.$refs.box
    var con = box. textContent || box.innerText
    this.textcon=con
    const formData = new FormData()
formData.append('speechen',this.textcon)
speechend(formData).then(res=>{
  this.aispeech= res.data.speeching
})
  },
play(){
var a=this.$refs.audio
a.play()
this.playing=false
this.suspend=true
  },
  suspen(){
var a=this.$refs.audio
a.pause()
this.playing=true
this.suspend=false
  },
  songend(){
    this.playing=false
this.suspend=true
  }
},
watch:{
  article:function(){
    this.$nextTick(()=>{
      this.voice()
    })
  }
}

}
</script>

<style lang='less' scoped>
.speech{
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #333;
  color: white;
  opacity: 0.6;
  height: 13vw;
  
  .audi{
    margin-left: 2rem;
    img{
     width: 1rem;
     margin-right: 0.2rem;
      
    }
  }
}
.btn{
  margin-top: 10px;
  padding: 5px;
  overflow: hidden;
}

</style>