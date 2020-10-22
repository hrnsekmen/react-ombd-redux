import React, { Component } from "react";

export default class Slider extends Component {
  render() {
    return (
      <div>
        <div
          class="position-relative overflow-hidden  "
          style={{ background: "#DEB51C" }}
        >
          <div class="col-md-5 p-lg-5 my-5 mx-auto">
            <h1 class="display-4 font-weight-normal">
              Welcome to <br />
              <span style={{ fontWeight: "bold" }}>MovieUP.</span>
            </h1>
            <p class="lead font-weight-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div class="product-device product-device-2 box-shadow d-none d-md-block"></div>
        </div>
      </div>
    );
  }
}
