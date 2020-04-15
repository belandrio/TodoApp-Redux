import React, { Component } from 'react'

export default class Todos extends Component {
    render() {
        console.log(this.props.todos)
        return (
            <div>
                <h1>Todos</h1>
            </div>
        )
    }
}
