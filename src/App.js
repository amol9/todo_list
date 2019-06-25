import React, { Component } from 'react';
//import './App.css';
import Todos from './components/Todos'

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

  render () {
    console.log(this.state.todos)

    return (    
      <div className="App">
        <header className="App-header">
          <h1>App</h1>
          <p>react v{React.version}</p>
          <Todos todos={this.state.todos} markComplete={this.markComplete}/>
        </header>
      </div>
    );
  }
}

export default App;
