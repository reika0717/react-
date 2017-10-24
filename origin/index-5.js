import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

class Clock extends React.Component {
  constructor (props) {
    super(props)
    this.state = {time: new Date()}
  }

  render () {
    return (
      <h1>{this.state.time.toLocaleTimeString()}.</h1>
    )
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
)

/** MEMO: state vs props
stateはコンポーネント自身が自由に変更できるプロパティ、propsは親コンポーネントからしか変更できないプロパティです。
親コンポーネントから子コンポーネントのpropsを変更する方法は後述します。
*/

/** Work
stateを ReactDOM.render() からprops経由で渡すようにして下さい。
*/
