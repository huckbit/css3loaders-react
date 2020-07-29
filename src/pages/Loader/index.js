import React, { Component } from "react";
import loadersData from "../../data/loaders";

export default class Loader extends Component {
  render() {
    // const loader = loadersData[this.props.match.params.id - 1];
    const id = this.props.match.params.id;
    const loaderItem = loadersData.filter((element) => parseInt(element.id) === id);
    const { name, markup, css } = loaderItem[0];
    return (
      <div>
        <h1>{name}</h1>
        <pre>
          <code>{markup}</code>
        </pre>
        <pre>
          <code>{css}</code>
        </pre>
      </div>
    );
  }
}
