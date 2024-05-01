import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';


const CartWidget = () => {
    const itemsInCart = 5;

    return (
        <div className="cart-widget">
            <i className="bi bi-cart"></i>
            <span className="badge colorVioleta">{itemsInCart}</span>
        </div>
    );
}

export default CartWidget;
