import React from "react";
import "./Hero.css";
import vector from "./images/vector.svg";

export default function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="col-sm margin-left">
            <h1>
              <span>Join us</span> in Keeping our environment clean and green.
            </h1>
            <h2 className="secondary-header">
              Learn how we can improve our environment
            </h2>
            <button>Clean-UP Locations</button>
          </div>
          <div className="col-sm">
            <img
              src={vector}
              alt="Three animated people cleaning the planet."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
