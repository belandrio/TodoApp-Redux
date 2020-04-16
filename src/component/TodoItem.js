import React, { Component } from 'react';


export class TodoItem extends Component {
    render() {
        return (
            <div style={itemStyle}>
                <p>{this.props.todo.title}</p>
            </div>
        )
    }
}
const itemStyle = {
    backgroundColor: '#f4f4f4'
}


export default TodoItem
