import './App.css';
import React, {Component} from 'react'


class App extends Component {

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     count: 0,
  //     someKey: false
  //   }
  // }

  // state может быть без конструктора
  state = {
    count: 0,
    isCounting: false
  }

  handleStart = () => {
    this.setState({isCounting: true})
    this.counterId = setInterval(() => {
      this.setState({count: this.state.count + 1})
    }, 1000)
  }
  handleStop = () => {
    this.setState({ isCounting: false })
    clearInterval(this.counterId)
  }
  handleReset = () => {
    this.setState({ isCounting: false, count: 0 })
    clearInterval(this.counterId)
  }

  componentDidMount() {
    const userCount = localStorage.getItem('timer')
    if (userCount) {
      this.setState({ count: +userCount })
    }
  }

  componentDidUpdate() {
    localStorage.setItem('timer', this.state.count)
  }

  componentWillUnmount() {
    clearInterval(this.counterId)
  }

  render() {
    return (
      <div className="App">
       <h1>React Timer</h1>
       <h3>{this.state.count}</h3>
       {!this.state.isCounting ? (
         <button onClick={this.handleStart}>Start</button>)
       : (<button onClick={this.handleStop}>Stop</button>
       )}
       <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }

  
}

export default App;
