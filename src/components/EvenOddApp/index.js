// Write your code here

import './index.css'

import {Component} from 'react'

class EvenOddApp extends Component {
  state = {isEven: true, count: 0}

  onChangeButton = () => {
    this.setState(prevState => {
      const {count} = prevState
      const num = count + Math.ceil(Math.random() * 100)
      let numType

      if (num % 2 === 0) {
        numType = true
      } else {
        numType = false
      }

      return {isEven: numType, count: num}
    })
  }

  render() {
    const {count, isEven} = this.state

    const content = isEven ? 'Even' : 'Odd'

    return (
      <div className="even-odd-app-container">
        <div className="even-odd-container">
          <h1 className="heading">Count {count}</h1>
          <p className="even-odd-inf">Count is {content}</p>
          <button
            className="button"
            type="button"
            onClick={this.onChangeButton}
          >
            Increment
          </button>
          <p className="even-odd-random-inf">
            Increase By Random Number Between 0 to 100"
          </p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
