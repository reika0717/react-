import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const Root = () => (
  <div>
    <h1>Hello React.</h1>
    <Clock />
  </div>
)

class Clock extends React.Component {
  constructor (props) {
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

  render () {
    return (
      <h1>{this.state.time.toLocaleTimeString()}.</h1>
    )
  }
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)

/** Work
Rootコンポーネントの <h1> エレメントの文字色が、3秒おきに変わるようにして下さい。
*/
