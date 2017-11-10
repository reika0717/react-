import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

class Clock extends React.Component{
  constructor(props){
    super(props)
    this.state = {time: new Date()}
}

  componentDidMount () {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnMount () {
    clearInterval(this.timerID)
  }

  tick () {
    this.setState({time: new Date()})
  }

  render(){
    return (
      <h1>{this.state.time.toLocaleTimeString()}.</h1>
    )
  }
}

const Root = (props) => (
  <div>
    <h1>Hello React.</h1>
    <Clock />
  </div>
)

  //react コンポーネントオブジェクトを返す前になんらかの処理をしたい場合の書き方
  // return {
  //   処理
  //   (<h1>{props.time}</h1>)
  // }
  // 実際のjsの処理(イメージ)
  // return React.createElement(
  //   <h1>{props.time}.</h1>

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)

/** MEMO: extends React.Component vs simple function
stateを使用したい / componentDidMountなどのreactのライフサイクルフックを使用したい場合は
extends React.Componentを使用してコンポーネントを定義します。→内部的に状態を持ちたいとき
それ以外では極力関数の形式でコンポーネントを定義します。
*/

/** Work
書き換えの練習としてなにも参照せずに、ClockコンポーネントがRootコンポーネントの代わりにstateをもつように変更して下さい(※このような操作は本来は非推奨です)。
上記の理由からconstで宣言したコンポーネントはstateを持てない → クラスとして書き換えるって意味の問題
*/
