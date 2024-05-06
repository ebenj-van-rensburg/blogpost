import React, { Component } from 'react';
import Products from './Products';
import JumboTronComponent from './JumboTronComponent';
import UserForm from './UserForm';

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
        <div style={styles.body}><h1>Hello, {this.formatName(user)}</h1></div>
        <div style={styles.body}><UserForm></UserForm></div>
        <div style={styles.body}>
          <JumboTronComponent>
            <Products />
          </JumboTronComponent>
          {/* <Button variant="danger" disabled={!isValid}>Default</Button> */}
        </div>
      </div>
    )
  }
}

export default App;

const styles = {
  body: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center'
  }
}
