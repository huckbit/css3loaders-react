import React, { Component } from "react";
import DefaultLayout from "../../layouts/default";
import { Link } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

import loadersData from "../../data/loaders";
import loaders from "../../data/loaders";

export default class Loader extends Component {
  render() {
    const id = this.props.match.params.id;
    const previous = id > 1 ? parseInt(id) - 1 : loadersData.length;
    const next = id < loadersData.length ? parseInt(id) + 1 : 1;
    const loaderItem = loadersData.filter((element) => element.id.toString() === id);
    const { name, markup, css } = loaderItem[0];
    return (
      <DefaultLayout>
        <div className="section">
          <div className="columns is-mobile">
            <div className="column is-2">
              {previous && (
                <Link className="title is-2" to={{ pathname: `/loader/${previous}` }}>
                  <FontAwesomeIcon icon={faCaretLeft} />
                </Link>
              )}
            </div>
            <div className="column has-text-centered">
              <h1 className="title is-1">{name}</h1>
            </div>
            <div className="column is-2 has-text-right">
              <Link className="title is-1 is-mobile-2" to={{ pathname: `/loader/${next}` }}>
                <FontAwesomeIcon icon={faCaretRight} />
              </Link>
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
