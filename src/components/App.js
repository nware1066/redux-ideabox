import React, { Component } from 'react';
import AddTodoForm from '../containers/AddTodoForm';
import ToDoList from '../containers/toDoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Another Todo Box</h1>
        <AddTodoForm />
        <ToDoList />
      </div>
    );
  }
}

export default App;
