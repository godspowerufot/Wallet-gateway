import React, { useEffect, useState } from "react";
import Models from "./models";
import Clients from "./clients";
import "./agencies.css";
import Agencies from "./agencies";

function Fullpage() {
  const [activeComponent, setActiveComponent] = useState(1);

  const handleComponentChange = (component) => {
    setActiveComponent(component);
  };

  return (
    <>
      <div className="container">
        <header>
          <h1>How it works</h1>
          <h2 id="h2">
            <strong>We've reimagined the modelling industry!</strong>
          </h2>
          <div className="description">
            <p>
              Premium Models App is the easiest and fastest way for models to
              find modelling work and for clients such as brands, photographers,
              and modelling agencies to find diverse models from around the
              world. This is how it works:
            </p>
          </div>
        </header>
        <div className="container">
          <div className="buttons">
            <button
              className={`button ${activeComponent === 1 ? "active" : ""}`}
              onClick={() => handleComponentChange(1)}
            >
              model
            </button>
            <button
              className={`button ${activeComponent === 2 ? "active" : ""}`}
              onClick={() => handleComponentChange(2)}
            >
              Agencies
            </button>
            <button
              className={`button ${activeComponent === 3 ? "active" : ""}`}
              onClick={() => handleComponentChange(3)}
            >
              Clients
            </button>
          </div>
          <div className="components">
            {activeComponent === 1 && <Models />}
            {activeComponent === 2 && <Agencies />}
            {activeComponent === 3 && <Clients />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Fullpage;
