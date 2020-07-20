import React from "react";
import "./App.scss";
import loadersData from "./data/loaders";
import Card from "./components/Card";

class App extends React.Component {
  render() {
    const loadersComponents = loadersData.map((loader) => (
      <Card key={loader.id} title={loader.name} spinnerMarkup={loader.markup} />
    ));
    return (
      <div className="container">
        <div className="columns">
          <div className="column">{loadersComponents}</div>
        </div>
      </div>
    );
  }
}

export default App;
