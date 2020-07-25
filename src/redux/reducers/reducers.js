import {INDEXDATA,CATEMODULES} from "../constants/constants"
import {combineReducers} from "redux";

const homeData = {
  cateModules:[],//导航数据
  indexData:{},//首页数据
}; //初始化值

function home (prevState = homeData,action){
  // console.log(prevState,action);
  switch(action.type){
    case CATEMODULES:
      console.log(action.data);
      return {
        ...prevState,
        cateModules:action.data,
      }
      case INDEXDATA:
        return {
          ...prevState,
          indexData:action.data,
        }
    default:
      return prevState
  }
}

export default combineReducers({
  home,
})