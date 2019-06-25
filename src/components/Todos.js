import React, { Component } from 'react';
//import './App.css';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  markComplete = () => {
    console.log('todo js mark complete')
  }

  render () {
    console.log(this.props.todos)
    return (
        this.props.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
        ))
    );
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;

//todo: find: i converted the functions to classes manually, but, why weren't classes present in the first place?
