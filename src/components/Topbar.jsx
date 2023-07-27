import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Topbar = (props) => {
const [search, setSearch] = useState();

  return (
    <div>
      
    <div className="container-fluid">
        <div className="row bg-secondary py-2 px-xl-5">
            <div className="col-lg-6 d-none d-lg-block">
                <div className="d-inline-flex align-items-center">
                    <Link className="text-dark" to="/">FAQs</Link>
                    <span className="text-muted px-2">|</span>
                    <Link className="text-dark" to="/">Help</Link>
                    <span className="text-muted px-2">|</span>
                    <Link className="text-dark" to="/">Support</Link>
                </div>
            </div>
            <div className="col-lg-6 text-center text-lg-right">
                <div className="d-inline-flex align-items-center">
                    <Link className="text-dark px-2" to="/">
                        <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link className="text-dark px-2" to="/">
                        <i className="fab fa-twitter"></i>
                    </Link>
                    <Link className="text-dark px-2" to="/">
                        <i className="fab fa-linkedin-in"></i>
                    </Link>
                    <Link className="text-dark px-2" to="/">
                        <i className="fab fa-instagram"></i>
                    </Link>
                    <Link className="text-dark pl-2" to="/">
                        <i className="fab fa-youtube"></i>
                    </Link>
                </div>
            </div>
        </div>
        <div className="row align-items-center py-3 px-xl-5">
            <div className="col-lg-3 d-none d-lg-block">
                <Link to="/" className="text-decoration-none">
                    <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">Book</span>Shelf</h1>
                    
                </Link>
            </div>
            <div className="col-lg-6 col-6 text-left">
                <form action="">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search for products" onChange={(e) =>{ setSearch(e.target.value) } } onBlur={(e) => {props.selectSearchTerm(search)}}/>
                        <div className="input-group-append">
                            <span className="input-group-text bg-transparent text-primary">
                                <Link to = '/searchFeed'><i className="fa fa-search"></i></Link>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
            <div className="col-lg-3 col-6 text-right">
                <Link to="/userdetails" className="btn border">
                    <i className="fas fa-user text-primary"></i>
                    <span className="badge"></span>
                </Link>
                &nbsp;
                <Link to="/cart" className="btn border">
                    <i className="fas fa-shopping-cart text-primary"></i>
                    <span className="badge"></span>
                </Link>
            </div>
        </div>
    </div>

    
    </div>
  )
}

export default Topbar
