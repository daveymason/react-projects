import React from 'react';
import './App.css';
import Header from './components/functional/Header'
import AddToList from './components/AddToList'
import Todos from "./components/Todos";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [
        {
          id: '1',
          title: 'Scrimba',
          finished: false
        },
        {
          id: '2',
          title: 'Code Academy',
          finished: false
        },
        {
          id: '3',
          title: 'Udemy',
          finished: false
        }
      ]
    }
  }

  onComplete = (id) => {
    this.setState({todos: this.state.todos.map(list => {
      if(list.id === id){
        list.finished = !list.finished
      }
        return list;
      })
    });
  }

  deleteTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(list => 
      list.id !== id)]
    })
  }

  addToList = (title) => {
    const newTodo = {
      id: 4,
      title,
      finished: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
  }

  render(){
  return (
    <div className="App">
      <Header />
      <Todos 
      todos={this.state.todos} 
      onComplete={this.onComplete}
      deleteTodo={this.deleteTodo}
      />
      <AddToList addToList={this.addToList}/>
    </div>
  )};
}

export default App;
