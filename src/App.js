import React, { Component } from 'react';
import './App.css';
import Todos from "./component/Todos";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false
      }, {
        id: 2,
        title: "Going for shopping",
        completed: true
      },{
        id: 3,
        title: "Saving Money",
        completed: false
      }]
  };
  render() {
    return (
      <div className="App">
         <Todos todos={this.state.todos} />
      </div>
    );
  }
}
export default App;


