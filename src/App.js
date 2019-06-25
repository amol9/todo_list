import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos'
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import AddTodo from './components/AddTodo';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Complete the ReactJS tutorial",
        completed: false
      },
      {
        id: 2,
        title: "Complete the Django tutorial",
        completed: true
      },
      {
        id: 3,
        title: "Complete the Materialize tutorial",
        completed: false
      }
    ]
  }

  markComplete = (id) => {
    console.log(id)
    this.setState({todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
  })
  }

  delTodo = (id) => {
    console.log(id)
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }

  addTodo = (e) => {
    console.log("Add TODO")
  }

  render () {
    //console.log(this.state.todos)

    return (    
      <div className="App">
        <div className="container">
          <Header/>
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
