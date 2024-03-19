import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}
  increment = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <h1>
          The Button has been clicked{' '}
          <span className="count_text">{count}</span> times
        </h1>
        <p>Click the button to increase the count</p>
        <div>
          <button type="button" onClick={this.increment}>
            Click Me
          </button>
        </div>
      </div>
    )
  }
}
export default ClickCounter
