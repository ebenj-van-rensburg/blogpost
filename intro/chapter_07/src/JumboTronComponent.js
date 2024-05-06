import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

class JumboTronComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Jumbotron>
          <h1 style={styles.body}>Jumbotron Example</h1>
          <p style={styles.body}>{this.props.children}</p>
          <p style={styles.body}><Button variant='danger' bsStyle="primary">Button</Button></p>
        </Jumbotron>
      </div>
    );
  }
}

export default JumboTronComponent;

const styles = {
  body: {
    display: 'flex',
    justifyContent: 'center'
  }
}
