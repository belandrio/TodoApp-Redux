import React, { Component } from 'react';
import './App.css';
import Todos from "./component/Todos";
import AddTodo from "./component/AddTodo"
import Search from "./component/Search"
import { v4 as uuidv4 } from 'uuid';
import Header from "./layout/Header";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from "./pages/About"

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
      }, {
        id: 3,
        title: "Saving Money",
        completed: false
      }],
    filtered: []

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
      id: uuidv4(),
      title,
      completed: false
    };
    this.setState({ todos: [...this.state.todos, newTodo], filtered: this.state.todos });
  };

  componentDidMount() {
    this.setState({
      filtered: this.state.todos
    });
  }

  searchTodo = (e) => {
    let search = [];
    if (e.target.value !== "") {
      search = this.state.filtered.filter(searchitem => {
        const searchlw = searchitem.title.toLowerCase();
        const targetlw = e.target.value.toLowerCase();
        return searchlw.includes(targetlw)
      });
      this.setState({
        todos: search
      })
    } else {
      this.setState({
        todos: this.state.filtered
      })
    }
  }


  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <Search searchTodo={this.searchTodo} />
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
              </React.Fragment>
            )}
          />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}
export default App;


