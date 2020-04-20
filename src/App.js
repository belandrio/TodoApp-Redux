import React, { Component } from 'react';
import './App.css';
import Todos from "./component/Todos";
import AddTodo from "./component/AddTodo"
import Search from "./component/Search"
//import { v4 as uuidv4 } from 'uuid';
import Header from "./layout/Header";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from "./pages/About"
//import axios from "axios"
import firebase from "./Firebase";

class App extends Component {
  db = firebase.firestore().collection('todos')
  state = {
    todos: [],
    filtered: [],
  };

  onCollectionUpdate = (docSnapshot) => {
    const todos = [];
    docSnapshot.forEach((doc) => {
      const { title, completed } = doc.data();
      todos.push({
        id: doc.id,
        title,
        completed,
        doc // DocumentSnapshot
      });
    });
    this.setState({
      todos: todos,
      filtered: todos
    });
  }

  componentDidMount() {
    this.db.onSnapshot(this.onCollectionUpdate);
  }


  markComplete = (id) => {
    this.db.doc(id).get()
      .then((doc) => {
        if (doc.exists) {
          const { completed } = doc.data();
          this.db.doc(id).update({
            completed: !completed
          })
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.error("Error updating document: ", error);
      });
  };

  deleteTodo = (id) => {
    console.log(id)
    this.db.doc(id).delete()
      .then(() => {
        console.log("Document successfully deleted!")
      }).catch((error) => {
        console.error("Error removing document: ", error);
      });
  };


  addTodo = (title) => {
    this.db.add({
      title,
      completed: false
    }).then(() => {
      console.log("The todo is added");
    })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };


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



