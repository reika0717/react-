import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const Clock = () => <h1>{(new Date()).toLocaleTimeString()}.</h1>

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
)

/** Work
自分自身で自由にコンポーネントを作成して、DOMにレンダリングして下さい。
*/
