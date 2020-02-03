import React, { Component } from "react";
import PropTypes from "prop-types";

class EditFishForm extends Component {
  //state = {  }
  static propTypes = {
    fish: PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      status: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired
    }),
    index: PropTypes.string,
    updateFish: PropTypes.func
  };
  handleChange = e => {
    console.log(e.currentTarget.value);
    //update fish on change
    const updatedFish = {
      ...this.props.fish,
      [e.currentTarget.name]: e.currentTarget.value
    };
    //console.log(updatedFish);
    this.props.updateFish(this.props.index, updatedFish);
  };
  render() {
    const { fish } = this.props;
    return (
      <div className="fish-edit">
        {/* <form className="fish-edit" onSubmit={this.createFish}> */}
        <input
          name="name"
          type="text"
          placeholder="name"
          value={fish.name}
          onChange={this.handleChange}
        />
        <input
          name="price"
          type="text"
          placeholder="price"
          value={fish.price}
          onChange={this.handleChange}
        />
        <select name="status" value={fish.status} onChange={this.handleChange}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          name="desc"
          placeholder="desc"
          value={fish.desc}
          onChange={this.handleChange}
        />
        <input
          name="image"
          type="text"
          placeholder="image"
          value={fish.image}
          onChange={this.handleChange}
        />
        <button onClick={() => this.props.deleteFish(this.props.index)}>
          Remove Fish
        </button>
        {/* </form> */}
      </div>
    );
  }
}

export default EditFishForm;
