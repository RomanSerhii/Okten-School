import React, { Component } from "react";

class PictureComponent extends Component {
  render() {
    let { msg, iUrl } = this.props;
    return (
      <div>
        <h3>{msg}</h3>
        <img src={iUrl} alt="logo" />
      </div>
    );
  }
}

export default PictureComponent;
