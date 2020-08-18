import React from "react";
import "./App.scss";
import DefaultLayout from "../../layouts/default";
import loadersData from "../../data/loaders";
import Card from "../Card";

class App extends React.Component {
  render() {
    const loadersComponents = loadersData.map((loader) => (
      <Card
        key={loader.id}
        id={loader.id}
        title={loader.name}
        spinnerMarkup={loader.markup}
      />
    ));
    return (
      <DefaultLayout>
        <div className="section mt-5">
          <div className="container">
            <div className="cards-grid">{loadersComponents}</div>
          </div>
        </div>
      </DefaultLayout>
    );
  }
}

export default App;
