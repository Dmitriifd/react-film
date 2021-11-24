import './App.css';
import React, {Component} from 'react'


class App extends Component {

  state = {
    post: [
      {id: 'abc1', name: 'JS Basic'},
      {id: 'abc2', name: 'JS Advanced'},
      {id: 'abc3', name: 'React JS'},
    ]
  }


  render() {
    return (
      <div className="App">
        {this.state.post.map(post => (
          <h2 key={post.id}>{post.name}</h2>
        ))}
      </div>
    );
  }

  
}

export default App;
