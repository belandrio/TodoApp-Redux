import React, { Component } from 'react'
import TodoItem from "./TodoItem"

// Redux
import store from "../redux/store";

class Todos extends Component { 

    constructor(props) {
        super(props);
    
        this.state = {
          todos: [],
        };
    
        store.subscribe(() => {
          // When state will be updated(in our case, when items will be fetched), 
          // we will update local component state and force component to rerender 
          // with new data.
    
          this.setState({
            todos: store.getState().todos
          });
        });
      }

    render() {
        return (
            this.state.todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo}/>
            )
            )
        )
    }
}
  
  export default Todos;