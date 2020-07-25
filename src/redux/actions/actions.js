import {INDEXDATA} from "../constants/constants"
import {getCateModules} from "../../config/api/index"
//暴露action对象工厂函数
//更新导航数据
export const CateModules = cateModules =>({
  type:INDEXDATA,
  data:cateModules,//跟新的数据
})
//异步获取导航数据
export const CateModulesAsync = ()=>{
  return async(dispatch)=>{
    let result = await getCateModules();
    //执行异步代码发送请求
    return dispatch(CateModules([1,2,3]))
  }
}