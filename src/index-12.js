import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/** Purpose
子コンポーネントで発生したイベントを親コンポーネントに伝える方法を確認します。
この仕組みを使うと、以下の流れでイベントハンドラ経由で「親 <- 子」へとデータを受け渡すことができます。

子でイベントが発生
  => 親にイベントを通知
  => 親は子からイベントハンドラ経由で渡された値を元に、自分や子を更新
*/

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
        <MyInput onChange={(e) => this.handleClick(e.target.value)} />
      </div>
    )
  }
}

const MyInput = (props) => (
  <input onChange={props.onChange} />
)

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)

/** Work
インプットフォームに入力した文字が、リアルタイムで親コンポーネントに反映されるような子コンポーネントを作成して下さい
*/
