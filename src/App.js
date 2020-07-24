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
        <div className="cards-grid">{loadersComponents}</div>
      </div>
    );
  }
}

export default App;
