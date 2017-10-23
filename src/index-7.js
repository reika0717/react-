import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const Root = () => (
  <div>
    <h1>Hello React.</h1>
    <Clock />
  </div>
)

const Clock = () => <h1>{(new Date()).toLocaleTimeString()}.</h1>

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)

/** Work
1. 現在時刻を ReactDOM.render() から渡すようにして、最終的にClockコンポーネントで描画するようにして下さい。
2. Clockコンポーネントが1秒ごとに時刻を更新するようにして下さい。
*/
