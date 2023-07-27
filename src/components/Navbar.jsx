import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    const user = props.userData;
  return (
    <div style={{paddingLeft: "3%", paddingRight: "3%"}}>
        <div className="container-fluid mb-5">
        <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                    <Link to="/" className="text-decoration-none d-block d-lg-none">
                        <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">Book</span>Shelf</h1>
                    </Link>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav mr-auto py-0">
                            <Link to="/" className="nav-item nav-link ">Home</Link>
                            <Link to="/categories" className="nav-item nav-link">Shop</Link>
                            <Link to="/seller" className="nav-item nav-link">Sell</Link>
                            <div className="nav-item dropdown">
                                <a href="/" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu rounded-0 m-0">
                                    <Link to="/cart" className="dropdown-item">Shopping Cart</Link>
                                   
                                </div>
                            </div>
                            <Link to="/contact" className="nav-item nav-link">Contact</Link>
                        </div>
                        <div className="navbar-nav ml-auto py-0">
                            <Link to="/signin" className="nav-item nav-link">{user[0].email}</Link>
                           
                        </div>
                    </div>
                </nav>
        </div>
    </div>
  )
}

export default Navbar
