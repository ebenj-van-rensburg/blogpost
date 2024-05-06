import React, { Component } from 'react';
import Products from './Products';
import JumboTronComponent from './JumboTronComponent';
import { Jumbotron, Button } from 'react-bootstrap';

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
        <h1 style={styles.body}>Hello, {this.formatName(user)}</h1>
        <p style={styles.body}>
          <JumboTronComponent>
            <Products />
          </JumboTronComponent>
          {/* <Button variant="danger" disabled={!isValid}>Default</Button> */}
        </p>
      </div>
    )
  }
}

export default App;

const styles = {
  body: {
    display: 'flex',
    justifyContent: 'center'
  }
}
