import Vue from 'vue'
import popueCom from './popue.vue'
const popuetor =Vue.extend(popueCom)
function showToast(text,time=2000){
  const toastdom = new popuetor({
    el:document.createElement('div'),
    data(){
      return{
        text:text,
        showwrap:true
      }
    }
  })
  document.body.appendChild(toastdom.$el)

  setTimeout(() => {
    toastdom.showwrap=false
  }, time);
}
function popTost (){
  Vue.prototype.$popus=showToast
}
export default popTost