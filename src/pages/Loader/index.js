import React, { Component } from "react";
import DefaultLayout from "../../layouts/default";
import ReactHtmlParser from "react-html-parser";
import LoaderNav from "./LoaderNav";

import loadersData from "../../data/loaders";

export default class Loader extends Component {
  render() {
    const id = this.props.match.params.id;
    const previous = id > 1 ? parseInt(id) - 1 : loadersData.length;
    const next = id < loadersData.length ? parseInt(id) + 1 : 1;
    const loaderItem = loadersData.filter(
      (element) => element.id.toString() === id
    );
    const { name, markup, css } = loaderItem[0];
    return (
      <DefaultLayout>
        <div className="section">
          <div className="container">
            <LoaderNav previous={previous} next={next} name={name} />
            <div className="columns">
              <div className="column is-5">
                <div className="message">
                  <div className="message-header">preview</div>
                  <div className="message-body loader-content">
                    <div className="loader-preview">
                      {ReactHtmlParser(markup)}
                    </div>
                  </div>
                </div>
                <div className="message">
                  <div className="message-header">markup</div>
                  <div className="message-body">
                    <pre>
                      <code>{markup}</code>
                    </pre>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="message">
                  <div className="message-header">css</div>
                  <div className="message-body">
                    <pre>
                      <code>{css}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    );
  }
}
