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

  handleClick (arg, event) {
    this.setState(() => ({
      message: arg
    }))
  }

  render () {
    return (
      <div>
        <h1>{this.state.message}</h1>

        {/* Method 1 */}
        <button onClick={(e) => this.handleClick('Method 1', e)}>Change Style(method 1)</button>

        {/* Method 2 */}
        <button onClick={this.handleClick.bind(this, 'Method 2')}>Change Style(method 2)</button>
      </div>
    )
  }
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)
