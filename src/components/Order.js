import React, { Component } from "react";
import PropTypes from "prop-types";
import { formatPrice } from "../helpers";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Order extends Component {
  static propTypes = {
    fishes: PropTypes.object,
    order: PropTypes.object,
    removeFromOrder: PropTypes.func
  };
  renderOrder = key => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    if (!fish) return null;
    const isAvailable = fish.status === "available";
    const transitionOptions = {
      classNames: "order",
      key,
      timeout: {
        enter: 200,
        exit: 250
      }
    };

    if (!isAvailable) {
      return (
        <CSSTransition {...transitionOptions}>
          <li key={key}>
            Sorry {fish ? fish.name : "fish"} is no longer available.
          </li>
        </CSSTransition>
      );
    }
    return (
      <CSSTransition {...transitionOptions}>
        <li key={key}>
          <span>
            {count}lbs {fish.name}{" "}
            <button
              className="delete-fish"
              onClick={() => this.props.removeFromOrder(key)}
            >
              &times;
            </button>
          </span>
          <span style={{ textAlign: "right" }}>{formatPrice(fish.price)}</span>
        </li>
      </CSSTransition>
    );
  };
  //state = {};
  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === "available";
      if (isAvailable) {
        return prevTotal + count * fish.price;
      }
      return prevTotal;
    }, 0);
    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <TransitionGroup component="ul" className="order">
          {orderIds.map(this.renderOrder)}
        </TransitionGroup>
        <div className="total">
          Total: <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;
