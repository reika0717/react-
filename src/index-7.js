import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const Root = (props) =>(
  <div>
    <h1>Hello React.</h1>
    <Clock time={props.time}/>
  </div>
)

class Clock extends React.Component{
  constructor(props){
    super(props)
    this.state = {time: new Date()}
  }

componentDidMount (){
  this.timerID = setInterval(() => this.tick(),1000)
}

componentWillUnMount (){
  clearInterval(this.timerID)
}

tick (){
  this.setState({time: new Date()})
}

render(){
    return(
      <h1>{this.state.time.toLocaleTimeString()}</h1>
  )
}

}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)



//コンストラクタはクラスの中でしか定義できない

/** Work
1. 現在時刻を ReactDOM.render() から渡すようにして、最終的にClockコンポーネントで描画するようにして下さい。
2. Clockコンポーネントが1秒ごとに時刻を更新するようにして下さい。
*/　

// const Root = () => (
//   <div>
//     <h1>Hello React.</h1>
//     <Clock />
//   </div>
// )
//
// const Clock = () => <h1>{(new Date()).toLocaleTimeString()}.</h1>
//
// ReactDOM.render(
//   <Root />,
//   document.getElementById('root')
// )
