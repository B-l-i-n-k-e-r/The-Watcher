import React, { Component } from "react";
import loading from "./spin.gif";

export default class Spinner extends Component {
  render() {
    const loadingStyle = {
      display: "block",
      margin: "auto",
      width: "70px", // ✅ optional: control spinner size
    };

    return (
      <div className="text-center my-3">
        <img
          style={loadingStyle}
          src={loading}
          alt="Loading..."
        />
      </div>
    );
  }
}
