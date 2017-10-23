import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

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
      <h1 style={{color: 'grey'}}>{this.state.time.toLocaleTimeString()}.</h1>
    )
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
)

/** Work
1秒毎に色が black <-> grey と変わるようにして下さい
*/
