import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const Clock = (props) => (
  <h1>{props.time}.</h1>
)

ReactDOM.render(
  <Clock time={(new Date()).toLocaleTimeString()} />,
  document.getElementById('root')
)

/** Work
Clockのアロー関数を、より簡単に表記して下さい。
*/
