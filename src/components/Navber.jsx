import React, { Component } from "react";
// import MyLocation from "../scripts/location.js";

class Navbar extends Component {
  //   constructor(props) {
  //     super(props);
  //     // MyLocation.getLocation();
  //   }
  state = {};
  render() {
    return (
      <nav>
        <h1>Weather Dashboard</h1>
        <div>
          <Link to="/">Home</Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
