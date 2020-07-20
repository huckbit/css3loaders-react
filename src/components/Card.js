import React from "react";
import ReactHtmlParser from "react-html-parser";

class Card extends React.Component {
  render() {
    let html = this.props.spinnerMarkup;

    return (
      <div className="card">
        <div className="card-image"></div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{this.props.title}</p>
            </div>
          </div>
          <div className="content">
            {ReactHtmlParser(html)}
            <a className="button is-link" href="/">
              Source
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
