import React from "react";
import ReactHtmlParser from "react-html-parser";
import { Link } from "react-router-dom";

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
            <Link
              to={{ pathname: `loader/${this.props.id}` }}
              className="button is-info my-4"
            >
              Source
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
