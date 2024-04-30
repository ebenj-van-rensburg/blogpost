import React, { Component } from 'react';
import Products from './Products';
import Rating from './Rating';
import { Button } from 'react-bootstrap';

class App extends Component {
  formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }

  render() {
    const user = {
      firstName: 'Eben',
      lastName: 'Janse van Rensburg'
    };

    const isValid = false;

    return (
      <div>
        <h1>Hello, {this.formatName(user)}</h1>
        <Products />
        <Button variant="danger" disabled={!isValid}>Default</Button>
      </div>
    )
  }
}

export default App;
