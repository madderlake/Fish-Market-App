import React from "react";
import PropTypes from "prop-types";

class AddFishForm extends React.Component {
  static propTypes = {
    addFish: PropTypes.func
  };
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createFish = e => {
    e.preventDefault();
    console.log("Making a Fish");

    const fish = {
      name: this.nameRef.current.value,
      price: this.priceRef.current.value,
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value
    };
    this.props.addFish(fish);
    //refresh form
    e.currentTarget.reset();
  };
  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input name="name" type="text" placeholder="name" ref={this.nameRef} />
        <input
          name="price"
          type="text"
          placeholder="price"
          ref={this.priceRef}
        />
        <select name="status" ref={this.statusRef}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" placeholder="desc" ref={this.descRef} />
        <input
          name="image"
          type="text"
          placeholder="image"
          ref={this.imageRef}
        />
        <button type="submit">+ Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;
