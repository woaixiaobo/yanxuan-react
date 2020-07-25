import {INDEXDATA} from "../constants/constants"

//暴露action对象工厂函数
export const mutations = cateModules =>({
  type:INDEXDATA,
  data:cateModules,//跟新的数据
})

export const mutationssAsync = ()=>{
  return (dispatch)=>{
    //执行异步代码发送请求
    return dispatch(mutations([1,2,3]))
  }
}