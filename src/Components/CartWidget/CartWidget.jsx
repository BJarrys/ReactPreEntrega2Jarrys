import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import './CartWidget.css';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <FontAwesomeIcon icon={faCartShopping} size="2x" />
      <div className="quantity-elements">{getQtyElements()}</div>
    </div>
  );
};

function getQtyElements()
{
    return 2;
}

export default CartWidget;