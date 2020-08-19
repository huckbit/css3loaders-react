import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong> <Link to="/">css3loaders.com</Link></strong> is created with ♥️ by  <a
            href="https://twitter.com/huckbit"
            target="_blank"
            rel="noopener noreferrer"
          >
            huckbit
          </a>. <br/> Source code and examples released under the <a href="https://opensource.org/licenses/MIT" target="_blank"
            rel="noopener noreferrer">MIT</a> license.
        </p>
      </div>
    </footer>
  );
};
