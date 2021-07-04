import React from 'react';
import Button from '../UI/Button';

class LinkComponent extends React.Component {
  btnClick() {
    window.open("https://daveymason.com");
}

  render() {
  return (
    <div> 
    <Button onClick={this.btnClick.bind(this)}>View all Davey's React Projects</Button>
    </div>

  )}
};

export default LinkComponent;

