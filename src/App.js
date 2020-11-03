import { render } from '@testing-library/react';
import React, {Component} from 'react';
import {v4 as uuidv4} from 'uuid';
import TodoView from "./components/TodoView";


export default class App extends Component {

  state = {
    todoList: [
      {
        id: uuidv4(),
        todo: "Take out trash"
      },
      {
        id: uuidv4(),
        todo: "Get hair cut"
      },
      {
        id: uuidv4(),
        todo: "Clean the house"
      },
      {
        id: uuidv4(),
        todo: "Workout at the gym"
      },
    ],
    todoValue: "",
    showErrorMessage: false,
  };

  handleInputChange = (event) => {
    if (this.state.showErrorMessage) {
      this.setState({
        showErrorMessage: false,
      });
    }

    this.setState({
      [event.target.name]: event.target.value,
    });

  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.todoValue.length === 0) {
      this.setState({
        showErrorMessage: true,
      });
      return;
    }

    let newTodoObj = {
      id: uuidv4(),
      todo: this.state.todoValue,
    };
    let newArray = [...this.state.todoList, newTodoObj];

    this.set
  };

  render() {
    const {todoList, showErrorMessage} = this.state;
  
    return (
      <div style={{textAlign: "center"}}>
        {showErrorMessage ? <div style={{color: "red", marginTop: 10}}>Please enter something!</div> : null}
        <input
        onChange={this.handleInputChange}
        type="text"
        name="todoValue"
        value={this.state.todoValue}
        />
      <button onClick={}>Add</button>
  
      <TodoView
        todoList={todoList}
        />
  
      </div>
    )
  }

}


