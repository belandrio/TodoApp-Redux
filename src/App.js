import React, { Component } from "react";
import "./App.css";
import AddTodo from "./component/AddTodo";
import Todos from "./component/Todos";
import Header from "./layout/Header";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from "./pages/About"

class App extends Component {
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
                <AddTodo />
                <Todos />
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
