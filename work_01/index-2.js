import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//書き出す方法はextendで継承して書き出す方法→No.4
//と二つあるが今回は以下のシンプルな方法でかきだす

 const Clock = () => <h1>{(new Date()).toLocaleTimeString()}.</h1>
 ReactDOM.render(
   <Clock />,
  document.getElementById('root')
)

/** Work
自分自身で自由にコンポーネントを作成して、DOMにレンダリングして下さい。
*/
