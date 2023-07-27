import React from 'react'
import Categories from './Categories'

import { Link } from 'react-router-dom'
import Topbar from './Topbar'
import Footer from './Footer'
import TopProducts from './TopProducts'


const Index = (props) => {
// props.selectCategory('Comics')

const user = props.userData;

  return (
    <div>
           <Topbar selectSearchTerm={props.selectSearchTerm}/>
  <div>
      <div className="container-fluid mb-5">
        <div className="row border-top px-xl-5">
           
            <div className="col-lg" >
                <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                    <Link to="/" className="text-decoration-none d-block d-lg-none">
                        <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">Book</span>Shelf</h1>
                    </Link>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse"> 
                        <span className="navbar-toggler-icon"> </span>
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
                <div id="header-carousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" style={{height: "410px"}}>
                            <img className="img-fluid" src="http://localhost:8000/0b250fe81daa42eeeeb877e06b143880" alt="crouselImage1"/>
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{maxWidth: "700px"}}>
                                    <h4 className="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
                                    <h3 className="display-4 text-white font-weight-semi-bold mb-4">Knowledgeble Books</h3>
                                    <Link to="/categories" className="btn btn-light py-2 px-3">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" style={{height: "410px"}}>
                            <img className="img-fluid" src="http://localhost:8000/1a5de919077b6bc3bbf52963ed92fba4" alt="crouselImage2"/>
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{maxWidth: "700px"}}>
                                    <h4 className="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
                                    <h3 className="display-4 text-white font-weight-semi-bold mb-4">Reasonable Price</h3>
                                    <Link to="/categories" className="btn btn-light py-2 px-3">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
                        <div className="btn btn-dark" style={{width: "45px", height: "45px"}}>
                            <span className="carousel-control-prev-icon mb-n2"></span>
                        </div>
                    </a>
                    <a className="carousel-control-next" href="#header-carousel" data-slide="next">
                        <div className="btn btn-dark" style={{width: "45px", height: "45px"}}>
                            <span className="carousel-control-next-icon mb-n2"></span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div className="container-fluid pt-5">
        
    </div>
        <Categories selectCategory={props.selectCategory}/>
       
        <TopProducts setProductDetails={props.setProductDetails} userData={props.userData}/>
        
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Index
