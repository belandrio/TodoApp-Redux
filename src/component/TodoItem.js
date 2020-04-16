import React, { Component } from 'react';


export class TodoItem extends Component {

    getStyle = () => {
        return {
            background: "#f4f4f4",
            padding: "10px",
            borderBottom: "1px #ccc dotted",
            textDecoration: this.props.todo.completed ? "line-through" : "none"
        }
    }


    render() {
       const { id, title, completed } = this.props.todo
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" checked={completed} onChange={(e) => this.props.markComplete(id, e)} /> {' '}
                    {title} 
                    <button onClick={(e) => this.props.deleteTodo(id, e)} style={btnStyle}>x</button> </p>
            </div>
        )
    }
}



const btnStyle = {
  background: '#ffc0cb',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default TodoItem
