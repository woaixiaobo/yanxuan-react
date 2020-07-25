import {INDEXDATA} from "./constants"

const indexData = '我是bozai'; //初始化值

function count (prevState = indexData,action){
  console.log(prevState,action);

  switch(action.type){
    case INDEXDATA:
      return '我是redux'
    default:
      return prevState
  }
}

export default count