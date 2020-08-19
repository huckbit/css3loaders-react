import React from "react";
import DefaultLayout from "../../layouts/default";
import { Link } from "react-router-dom";

export default () => {
  const pokemHtml = `<div className="pokem"></div>`;
  const pokemCss = `
.pokem {
  position: relative;
  display: block;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  background-color: #eeeeee; 
}
.pokem:after, .pokem:before {
    content: "";
    border-radius: 50%; 
}
.pokem::before {
    position: absolute;
    border: 35px solid transparent;
    border-top-color: #D82B2E;
    top: 0;
    left: 0;
    animation: air-spin 2s linear infinite; 
}
.pokem::after {
    position: absolute;
    top: 20px;
    left: 20px;
    height: 30px;
    width: 30px;
    background-color: #3A85D9; 
}
@keyframes air-spin {
    0% {
        transform: rotate(0deg); }
    100% {
        transform: rotate(360deg); } 
}`;

  return (
    <DefaultLayout>
      <div className="section">
        <div className="container">
          <div className="columns mt-5">
            <div className="column is-offset-2 is-8">
              <p className="has-text-centered mb-5">
                <i className="fas fa-question is-size-1"></i>
              </p>
              <h1 className="is-size-1 mt-3 pb-5">
                How to use a spinner in your website
              </h1>
              <p className="pb-2">
                The process is very simple. All you'll need to do is: 
              </p>
              <div className="content">
                <ol type="1">
                  <li>copy the html from the <b>markup</b> section and paste it in your html file.</li>
                  <li>copy the css from the <b>css</b> section and paste it in your css file.</li>
                  <li>done!</li>
                </ol> 
              </div>
              <p className="pb-4">
                What, if we want to use the loader <Link to="loader/1">pokem</Link> for example?
              </p>
              <p className="mb-4 has-text-centered loader-content">
                <span className="loader-preview">
                <span className="pokem"></span>
                </span>
              </p>
              <p className="pb-4">
                Go the <Link to="loader/1">pokem code page</Link>, select all
                the code inside the section <b>markup</b>:
                <pre className="my-3">{pokemHtml}</pre>
                paste it in your html file.
              </p>
              <p className="pb-4">
                After that select the code inside the section <b>css</b>:
                <pre className="my-3">{pokemCss}</pre>
                and paste it in your css file and save it.
              </p>
              <p>Cool! <span className="is-size-3" role="img" aria-label="hand"> 🙌</span> Now the spinner should be visible on your page!</p>
            </div>
          </div>
        </div>
      </div> 
    </DefaultLayout>
  );
};
