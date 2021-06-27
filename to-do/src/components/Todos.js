import React from 'react';
import ThingsTodo from './ThingsToDo';

class Todos extends React.Component{
    render(){
    return this.props.todos.map(list => (
        <ThingsTodo 
        key={list.id} 
        list={list} 
        onComplete={this.props.onComplete}
        deleteTodo={this.props.deleteTodo}
        />
    ));
    }
  }
  
  export default Todos;