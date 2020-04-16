import React, { Component } from 'react';
import './App.css';
import Todos from "./component/Todos";
import AddTodo from "./component/AddTodo"

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

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
    return todo
      })
    });
  };

  deleteTodo = (id) => {
    this.setState({
            todos: [...this.state.todos.filter(todo => todo.id !== id)]
          })
      };
    
      addTodo = (title) => {
        const newTodo = {
        id:4, 
        title, 
        completed: false
          };
        this.setState({ todos: [...this.state.todos, newTodo] });
          };
        


  render() {
    return (
      <div className="App">
        <AddTodo addTodo={this.addTodo}/>
         <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo}/>
      </div>
    );
  }
}
export default App;


