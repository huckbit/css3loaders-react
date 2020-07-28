import React from "react";
import ReactHtmlParser from "react-html-parser";

class Card extends React.Component {
  render() {
    let html = this.props.spinnerMarkup;

    return (
      <div className="card has-text-centered">
        <div className="card-image"></div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{this.props.title}</p>
            </div>
          </div>
          <div className="loader-content">
            <div className="loader-preview">{ReactHtmlParser(html)}</div>
            <a className="button is-link mt-4" href="/">
              Source
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
