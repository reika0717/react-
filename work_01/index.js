import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//JSXとは何かを学習

ReactDOM.render(
  <h1>{(new Date()).toLocaleTimeString()}</h1>,　  //JSXでの表記
  document.getElementById('root')
)

ReactDOM.render(
  <h1>{(new Date()).toLocaleTimeString()}</h1>,　  //JSXでの表記
  document.getElementById('root2')
)

/** Work
ReactDOM.render() を使用して、複数のDOMにReactコンポーネントをレンダリング(マッピング)して下さい。
*/
