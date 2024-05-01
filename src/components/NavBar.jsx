import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo-las-moras-70x70-2.png";
import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand navbar-light colorCosmicLatte">
            <div className="container-fluid">
                <div className="col py-2">
                    <Link to={"/"}>
                        <img src={logo} alt="Las Moras" width={50} />
                    </Link>
                    <NavLink className="navbar-brand brand-margin" to={"/"}>Las Moras</NavLink>
                </div>
                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/category/plantas"}>Plantas</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/category/macetas"}>Macetas</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/category/sustratos"}>Sustratos</NavLink>
                        </li>
                    </ul>
                    <div className="ml-auto">
                        <CartWidget />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;


