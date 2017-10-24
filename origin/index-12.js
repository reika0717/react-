import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

class Root extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      message: 'Hello React.'
    }
  }

  handleClick (arg) {
    this.setState(() => ({
      message: arg
    }))
  }

  render () {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <MyButton onClick={(e) => this.handleClick('Received child component event!')} />
      </div>
    )
  }
}

const MyButton = (props) => (
  <button onClick={props.onClick}>Emit From Child Component!</button>
)

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)

/** Work
インプットフォームに入力した文字が、リアルタイムで親コンポーネントに反映されるような子コンポーネントを作成して下さい
*/
