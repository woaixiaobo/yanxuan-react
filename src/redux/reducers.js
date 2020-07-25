import {INDEXDATA} from "./constants"
import {combineReducers} from "redux";

const indexData = '我是bozai'; //初始化值

function home (prevState = indexData,action){
  console.log(prevState,action);

  switch(action.type){
    case INDEXDATA:
      return '我是redux'
    default:
      return prevState
  }
}

export default combineReducers({
  home,
})