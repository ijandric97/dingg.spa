import React from "react";
import ReactDOM from "react-dom";

// DO NOT REMOVE THIS IMPORT
// It will be generated on initial build or start
import "./scss/build.minified.css";

// Sample element
const element = (
  <nav className="db dt-l w-100 border-box pa3 ph5-l">
    <a
      className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l times"
      href="/"
      title="Home"
    >
      Tachyons
    </a>
    <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
      <a
        className="link dim dark-gray f6 f5-l dib mr3 mr4-l"
        href="/"
        title="Home"
      >
        Home
      </a>
      <a
        className="link dim dark-gray f6 f5-l dib mr3 mr4-l"
        href="/"
        title="How it Works"
      >
        How it Works
      </a>
      <a
        className="link dim dark-gray f6 f5-l dib mr3 mr4-l"
        href="/"
        title="Blog"
      >
        Blog
      </a>
      <a
        className="link dim dark-gray f6 f5-l dib mr3 mr4-l"
        href="/"
        title="Press"
      >
        Press
      </a>
      <a className="link dim dark-gray f6 f5-l dib" href="/" title="Contact">
        Contact
      </a>
    </div>
  </nav>
);

ReactDOM.render(element, document.getElementById("root"));
