import React, { Component } from "react";
import DefaultLayout from "../../layouts/default";
import { Link } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";

import loadersData from "../../data/loaders";

export default class Loader extends Component {
  render() {
    // const loader = loadersData[this.props.match.params.id - 1];
    const id = this.props.match.params.id;
    const loaderItem = loadersData.filter((element) => element.id.toString() === id);
    const { name, markup, css } = loaderItem[0];
    return (
      <DefaultLayout>
        <div className="section">
          <div className="columns">
            <div className="column">
              <h1 className="title is-1">
                <Link to="/">
                  <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                </Link>
                {name}
              </h1>
            </div>
          </div>
          <div className="columns">
            <div className="column is-5">
              <div className="message">
                <div className="message-header">preview</div>
                <div className="message-body loader-content">
                  <div className="loader-preview">{ReactHtmlParser(markup)}</div>
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
      </DefaultLayout>
    );
  }
}
