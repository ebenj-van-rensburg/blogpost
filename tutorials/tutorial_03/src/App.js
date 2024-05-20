import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import TodoApp from "./todo/todoApp";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TodoApp />
      </div>

    );
  }
}
export default App;