import React, { Component } from "react";
import PropTypes from "prop-types";
// Redux
import { connect } from "react-redux";
import { addTodo } from "../redux/actions/todoAction";

export class AddTodo extends Component {
  state = {
    title: "",
  };
  
  Submit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: " " });
  };

  render() {
    console.log(this.state);
    return (
      <form onSubmit={this.Submit} style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          style={{ flex: "1", padding: "5px" }}
          placeholder="--- Add Todo ---"
          value={this.state.title}
          onChange={(e) => this.setState({ [e.target.name]: e.target.value })}
        />
        <input type="submit" value="Submit" className="btn" style={btnStyle} />
      </form>
    );
  }
}

const btnStyle = {
  background: "#ffc0cb",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  cursor: "pointer",
  fontSize: "16px",
  float: "right",
};

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default connect(null, { addTodo })(AddTodo);
