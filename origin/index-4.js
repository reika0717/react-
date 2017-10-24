import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

class Clock extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <h1>{this.props.time}.</h1>
    )
  }
}

ReactDOM.render(
  <Clock time={(new Date()).toLocaleTimeString()} />,
  document.getElementById('root')
)

/** Work
• Clockコンポーネントが、props.time を props.current で受け取るようにしてください
• Clockコンポーネントのconstructorメソッドを削除したうえで、同じ表示になるようにして下さい
• Clockコンポーネントを、関数形式に書き変えて下さい
*/
