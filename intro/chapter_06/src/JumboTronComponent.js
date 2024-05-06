import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

class JumboTronComponent extends Component {

  constructor(props){
    super(props);    
  }

  render() { 
    return (
      <div>                
        <Jumbotron>
            <h1 style={styles.body}>Jumbotron Example</h1>
            <p>{this.props.children}</p>
            <p style={styles.body}><Button bsStyle="primary">Button</Button></p>
        </Jumbotron>                                                                                                                                 
      </div>
    );
  }  
}

export default JumboTronComponent;

const styles = {
  background: {
    
  },
  body: {
    display: 'flex',
    justifyContent: 'center'
  }
}
