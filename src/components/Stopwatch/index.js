// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {isTimerRunning: false, timeElapsedInSec: 0}

  componentWillUnmount = () => {
    clearInterval(this.timeInterval)
  }

  onClickRestart = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false, timeElapsedInSec: 0})
  }

  onClickStop = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false})
  }

  tick = () => {
    this.setState(prevState => ({
      timeElapsedInSec: prevState.timeElapsedInSec + 1,
    }))
  }

  onClickStart = () => {
    this.timeInterval = setInterval(this.tick, 1000)
    this.setState({isTimerRunning: true})
  }

  renderMin = () => {
    const {timeElapsedInSec} = this.state
    const minutes = Math.floor(timeElapsedInSec / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  renderSec = () => {
    const {timeElapsedInSec} = this.state
    const seconds = Math.floor(timeElapsedInSec % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  render() {
    const {isTimerRunning} = this.state
    const timer = `${this.renderMin()} : ${this.renderSec()}`
    return (
      <div className="bg-container">
        <div className="timer-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="timer-card">
            <div className="img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="image"
              />
              <p className="description">Timer</p>
            </div>
            <h1 className="timer">{timer}</h1>

            <div className="btn-container">
              <button
                className="startBtn"
                type="button"
                onClick={this.onClickStart}
                disabled={isTimerRunning}
              >
                Start
              </button>
              <button
                className="stopBtn"
                type="button"
                onClick={this.onClickStop}
              >
                Stop
              </button>
              <button
                className="restartBtn"
                type="button"
                onClick={this.onClickRestart}
              >
                Restart
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
