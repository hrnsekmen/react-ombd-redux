import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <div>
        <div
          class="position-relative overflow-hidden  "
          style={{
            background: "linear-gradient(to right, #F5C518,#FBF7FC)",
            width: "1920px",
            height: "77px",
            marginBottom: "40px",
          }}
        >
          <span></span>
        </div>
      </div>
    );
  }
}
