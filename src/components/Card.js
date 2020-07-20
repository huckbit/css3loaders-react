import React from "react";

class Card extends React.Component {
  
  render() {
    return (
      <div className="card">
        <div className="card-image">
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">John Smith</p>
              <p className="subtitle is-6">@johnsmith</p>
            </div>
          </div>
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris. <a>@bulmaio</a>.
            <a href="#">#css</a> <a href="#">#responsive</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
