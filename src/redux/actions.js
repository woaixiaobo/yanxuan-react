import {INDEXDATA} from "./constants"

//暴露action对象工厂函数
export const getindex = (number) =>({
  type:INDEXDATA,
  data:number,//跟新的数据
})
