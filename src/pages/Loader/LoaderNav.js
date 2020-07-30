import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default (props) => {
  return (
    <div className="columns is-mobile">
      <div className="column is-2">
        <Link className="title is-2" to={{ pathname: `/loader/${props.previous}` }}>
          <FontAwesomeIcon icon={faCaretLeft} />
        </Link>
      </div>
      <div className="column has-text-centered">
        <h1 className="title is-1">{props.name}</h1>
      </div>
      <div className="column is-2 has-text-right">
        <Link className="title is-1 is-mobile-2" to={{ pathname: `/loader/${props.next}` }}>
          <FontAwesomeIcon icon={faCaretRight} />
        </Link>
      </div>
    </div>
  );
};
