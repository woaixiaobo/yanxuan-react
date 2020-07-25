import {createStore,applyMiddleware} from "redux"
import reducers from "./reducers/reducers"
//引入中间件，可以使用一步的actions
import thunk from "redux-thunk";
//引入redux的调试工具
import { composeWithDevTools } from "redux-devtools-extension";

//判断是开发环境还是线上环境，线上环境不支持调试
const middleware =
  process.env.NODE_ENV === "development"
    ? composeWithDevTools(applyMiddleware(thunk))
    : applyMiddleware(thunk);
//创建 store对象
const store =  createStore(reducers,middleware)

//暴露出去
export default store