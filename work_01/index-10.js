import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

class Root extends React.Component {
  constructor (props) {
    super(props)
    this.state = {active: true}

    this.handleClickBindedThis = this.handleClick.bind(this)
  }

  handleClick () {
    console.log('This:', this)
    this.setState((prevState) => ({active: !prevState.active}))
  }

  render () {
    return (
      <div>
        <h1 style={{color: this.state.active ? 'black' : 'grey'}}>Hello React.</h1>

        {/* Method 1 */}
        <button onClick={this.handleClickBindedThis}>Change Style(method 1)</button>

        {/* Method 2 */}
        <button onClick={() => this.handleClick()}>Change Style(method 2)</button>

        {/* Method 3 */}
        <button onClick={this.handleClick.bind(this)}>Change Style(method 3)</button>

        {/* Method 4 */}
        <button onClick={() => {
          console.log('This:', this)
          this.setState((prevState) => ({active: !prevState.active}))
        }}>Change Style(method 4)</button>

        {/* Wrong Way */}
        <button onClick={this.handleClick}>Change Style(wrong way)</button>
      </div>
    )
  }
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)
