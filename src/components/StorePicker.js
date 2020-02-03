import React, { Component } from "react";
import PropTypes from "prop-types";
import { getFunName } from "../helpers";

class StorePicker extends Component {
  //Don't need this because ...
  //   constructor() {
  //     super();
  //     this.goToStore = this.goToStore.bind(this);
  //   }
  static propTypes = {
    history: PropTypes.object
  };
  myInput = React.createRef();

  goToStore = e => {
    e.preventDefault();
    const storeName = this.myInput.current.value;
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter a Store</h2>
        <input
          ref={this.myInput}
          type="text"
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;
