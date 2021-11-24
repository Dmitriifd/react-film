import './App.css';
import React, {Component} from 'react'
import Posts from './components/Posts';


class App extends Component {

  state = {
    post: [
      {id: 'abc1', name: 'JS Basic'},
      {id: 'abc2', name: 'JS Advanced'},
      {id: 'abc3', name: 'React JS'},
    ]
  }

  handleSomething = () => {
    console.log('App.jsx setState update');
  }


  render() {
    const {post} = this.state
    return (
      <div className="App">
        <Posts posts={post} cb={this.handleSomething}/>
      </div>
    );
  }

  
}

export default App;
