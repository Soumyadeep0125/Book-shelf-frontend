import React from 'react'
import Topbar from './Topbar'
import Footer from './Footer'
import Navbar from './Navbar'

const Productdetails = (props) => {
    console.log(props.product)
    const addToCart = (product) => {
        const user = props.userData;
        if(user[0]._id !== undefined){
    
        
        fetch('http://localhost:8000/PurchaseLog', {
        method: 'POST',
        body: JSON.stringify({
            bId: user[0]._id,
            sId: product.userId,
            pName: product.productName,
            pCategory: product.category,
            
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        alert("Product Added to Cart")
        })
        .catch((err) => {
          console.log(err.message);
        });
      }else{
        alert("please Login First")
      }
    }
  return (
    <div>
           <Topbar selectSearchTerm={props.selectSearchTerm}/>
           <Navbar userData={props.userData}/>
      <div className="container-fluid py-5">
        <div className="row px-xl-5" >
            <div className="col-lg-5 pb-5" >
                <div id="product-carousel" className="carousel slide" data-ride="carousel" >
                    <div className="carousel-inner border" >
                        <div className="carousel-item active">
                            <img className="w-100 h-100" src= {`http://localhost:8000/${props.product.imageUrl1}`} alt="ProductImage1" />
                        </div>
                        <div className="carousel-item">
                            <img className="w-100 h-100" src={`http://localhost:8000/${props.product.imageUrl2}`} alt="ProductImage2" />
                        </div>
                        <div className="carousel-item">
                            <img className="w-100 h-100" src={`http://localhost:8000/${props.product.imageUrl3}`} alt="ProductImage3" />
                        </div>
                       
                    </div>
                    <a className="carousel-control-prev" href="#product-carousel" data-slide="prev">
                        <i className="fa fa-2x fa-angle-left text-dark"></i>
                    </a>
                    <a className="carousel-control-next" href="#product-carousel" data-slide="next">
                        <i className="fa fa-2x fa-angle-right text-dark"></i>
                    </a>
                </div>
            </div>

            <div className="col-lg-7 pb-5">
                <h3 className="font-weight-semi-bold">{props.product.productName}</h3>
                <div className="d-flex mb-3">
                    <div className="text-primary mr-2">
                        <small className="fas fa-star"></small>
                        <small className="fas fa-star"></small>
                        <small className="fas fa-star"></small>
                        <small className="fas fa-star-half-alt"></small>
                        <small className="far fa-star"></small>
                    </div>
                    <small className="pt-1">(50 Reviews)</small>
                </div>
                <h3 className="font-weight-semi-bold mb-4">₹{props.product.productPrice}</h3>
                <p className="mb-4">{props.product.productInformation}</p>
                
                
                <div className="d-flex align-items-center mb-4 pt-2">
                  
                    <button className="btn btn-primary px-3" onClick={() => addToCart(props.product)}><i className="fa fa-shopping-cart mr-1"></i> Add To Cart</button>
                </div>
                <div className="d-flex pt-2">
                    <p className="text-dark font-weight-medium mb-0 mr-2">Contact No:</p>
                    <div className="d-inline-flex">
                        {props.product.contactNumber}
                    </div>
                </div>
                <div className="d-flex pt-2">
                    <p className="text-dark font-weight-medium mb-0 mr-2">Seller Address:</p>
                    <div className="d-inline-flex">
                        {props.product.sellerAddress}
                    </div>
                </div>
                <div className="d-flex pt-2">
                    <p className="text-dark font-weight-medium mb-0 mr-2">Seller Pincode:</p>
                    <div className="d-inline-flex">
                        {props.product.pincode}
                    </div>
                </div>
            </div>
        </div>
        <div className="row px-xl-5">
            <div className="col">
                <div className="nav nav-tabs justify-content-center border-secondary mb-4">
                    <a className="nav-item nav-link active" data-toggle="tab" href="#tab-pane-1">Description</a>
                
                </div>
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="tab-pane-1">
                        <h4 className="mb-3">Product Description</h4>
                        <p>{props.product.productDescription}</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Productdetails
