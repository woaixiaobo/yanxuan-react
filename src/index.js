import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//引入适配
//引入redux
import { Provider } from 'react-redux'
import store from "./redux/store"
//移动端适配
import 'lib-flexible'
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

