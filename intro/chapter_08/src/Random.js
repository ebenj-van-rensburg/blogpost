import React, { Component } from 'react';
import Products from './Products';
import JumboTronComponent from './JumboTronComponent';
import UserForm from './UserForm';
import GitHub from './GitHub';

class Random extends Component {
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
        <div style={styles.left}>
          <div style={styles.body}><h1>Hello, {this.formatName(user)}</h1></div>
          <div style={styles.body}><UserForm></UserForm></div>
          <div style={styles.body}>
            <JumboTronComponent>
              <Products />
            </JumboTronComponent>
            {/* <Button variant="danger" disabled={!isValid}>Default</Button> */}
          </div>
        </div>
        <div style={styles.right}>
          <div style={styles.body}><h1>GitHub Search</h1></div>
          <div style={styles.body}><GitHub /></div>
        </div>

      </div>
    )
  }
}

export default Random;

const styles = {
  body: {
    width: '750px',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center'
  },
  left: {
    float: 'left'
  },
  right: {
    float: 'right'
  }
}