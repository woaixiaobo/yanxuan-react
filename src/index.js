import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//引入适配
//停入移动端ui库
import { Carousel  } from 'zarm';
import 'zarm/dist/zarm.min.css';

import 'lib-flexible'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
