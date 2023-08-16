import React from "react";
import '../Style/Navstyle.css'
import { SlHeart, SlBasket, SlUser } from "react-icons/sl";

const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary navbar fixed-top navbar-light bg-light" style={{ overflow: 'hidden' }}>
                <div className="container-xl" >
                    <a className="navbar-brand" style={{ fontSize: '30px', fontWeight: 'bold' }}>
                        CODE BUDDY.
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Another Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Another Link</a>
                            </li>
                            <li className="nav-item">
                                <a class="nav-link">Another Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Another Link</a>
                            </li>
                        </ul>
                        <div className="search-and-icons">
                            <form className="d-flex mb-2 me-2" role="search">
                                <input className="form-control me-2" type="search" aria-label="Search" />
                            </form>
                            <div className="user-icons d-flex mb-2 ml-2">
                                <div className="profile"><a href="#"><SlHeart /></a></div>
                                <div className="wishlist"><a href="#"><SlUser /></a></div>
                                <div className="cart"><a href="#"><SlBasket /></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>

    )

}

export default Navbar;

