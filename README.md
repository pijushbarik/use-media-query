# use-media-query

React hook for using media query change update on react functional components. Based on [useHooks.com](https://usehooks.com/useMedia/)


## Example
```javascript
import React from "react";
import logo from "./logo.svg";
import "./App.css";

import useMediaQuery from "@pijushbarik/use-media-query";

function App() {
  const isScreenMdOrLess = useMediaQuery(["(max-width: 768px)"], [true], false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Screen resolution is{" "}
          <b style={{ fontSize: 34 }}>
            {isScreenMdOrLess ? "less" : "greater"}
          </b>{" "}
          than 768px.
        </p>
        <p>Resize screen to see changes.</p>
      </header>
    </div>
  );
}

export default App;
```