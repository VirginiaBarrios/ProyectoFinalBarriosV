import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { CartContext } from './context/CartContext';

const CartWidget = () => {
    const {getCountProducts} = useContext(CartContext);


    if (getCountProducts() > 0) {
        return (
            <Link to="/cart" className="custom-link">
                <div className="cart-container">
                    <i className="bi bi-cart"></i>
                    <span className="badge buttonCart">{getCountProducts()}</span>
                </div>
            </Link>
        )
    }
}

export default CartWidget;

