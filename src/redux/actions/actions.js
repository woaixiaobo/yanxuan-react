import {INDEXDATA,CATEMODULES} from "../constants/constants"
import {getCateModules,getIndex} from "../../config/api/index"
//更新导航数据
export const CateModules = cateModules =>({
  type:CATEMODULES,
  data:cateModules,//跟新的数据
})
//异步获取导航数据
export const CateModulesAsync = ()=>{
  return async(dispatch)=>{
    let result = await getCateModules();
    //执行异步代码发送请求
    return dispatch(CateModules(result.data))
  }
}

//跟新首页数据
export const indexe = indexDate=>({
  type:INDEXDATA,
  data:indexDate,//跟新的数据
})
//异步获取首页数据
export const indexeAsync = ()=>{
  return async(dispatch)=>{
    let result = await getIndex();
    //执行异步代码发送请求
    return dispatch(indexe(result.data))
  }
}
