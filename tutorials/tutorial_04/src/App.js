import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Gallery from "./portfolio-gallery/Gallery";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Gallery />
      </div>

    );
  }
}
export default App;