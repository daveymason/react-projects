import React from "react";
import reactDom from "react-dom";

class ThingsTodo extends React.Component {
  myStyle = () => {
    return {
        display: 'flex',
        justifyContent: 'space-between',
        background: 'grey',
        padding: '5px',
        borderBottom: '2px black solid',
        textDecoration: this.props.list.finished ? "line-through" : "none",
    };
  };

  render() {
    return (
      <div style={this.myStyle()}>
          <input type="checkbox" 
          onChange={this.props.onComplete.bind(this, this.props.list.id)} />
          <h2>{this.props.list.title}</h2>
          <button 
          onClick={this.props.deleteTodo.bind(this, this.props.list.id)}
          style={{
              backgroundColor: 'red',
              padding: '5px'
              }}>
                  Delete
          </button>
      </div>
    );
  }
}

export default ThingsTodo;
