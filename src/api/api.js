import axios from 'axios'
let baseurl='http://vue.thexxdd.cn'
// 轮播数据
export const banner=()=>{
return  axios.get(baseurl+"/tourism/")
}

// 列表数据
export const list=(loanend)=>{
  return axios.get(baseurl+'/homes/?page='+loanend)
}
//详情数据
export const goods=(goodsId)=>{
  return axios.get(baseurl+'/goods/'+goodsId+'/')
}

// 语音合成
export const speechend=(params)=>{
 return axios.post((baseurl+'/speech/'),params)
}
// 搜索数据
export const searching=(searcher)=>{
  return axios.get(baseurl+'/goods/?search='+searcher)
}
// 发送验证码
export const getcode=(params)=>{
  return axios.post((baseurl+'/codes/'),params)
 }
 // 注册
export const register=(params)=>{
  return axios.post((baseurl+'/users/'),params)
 }