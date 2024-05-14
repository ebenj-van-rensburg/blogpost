import React from 'react';
import Products from './Products';
import JumbotronComponent from './JumbotronComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div>
      <JumbotronComponent>
        <Products />
      </JumbotronComponent>
    </div>
  );
}

export default App;
