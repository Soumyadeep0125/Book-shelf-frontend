import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const TopProducts = (props) => {
  const [topProducts, setTopProducts] = useState([]);
  const handleClick = (idx) => {
    const selectedProduct = topProducts[idx];
    props.setProductDetails(selectedProduct);
    console.log(selectedProduct);
  };
  const addToCart = (topProducts, idx) => {
    const user = props.userData;
    if(user[0]._id !== undefined){

    
    fetch('http://localhost:8000/PurchaseLog', {
    method: 'POST',
    body: JSON.stringify({
        bId: user[0]._id,
        sId: topProducts.userId,
        pName: topProducts.productName,
        pCategory: topProducts.category,
        
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
  
    useEffect(() => {
        fetch('http://localhost:8000/getTopProducts')
        .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setTopProducts(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);
   const topProductList= topProducts
 
   .map((topProducts, idx) => (
     <div className="col-lg-3 col-md-6 col-sm-12 pb-1" key={topProducts._id}>
       <div className="card product-item border-0 mb-4">
         <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0" style={{ height: '250px' }}>
           <img className="img-fluid w-100" src={`http://localhost:8000/${topProducts.imageUrl1}`} alt="" />
         </div>
         <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
           <h6 className="text-truncate mb-3">{topProducts.productName}</h6>
           <div className="d-flex justify-content-center">
             <h6>₹{topProducts.productPrice}</h6>
           </div>
         </div>
         <div className="card-footer d-flex justify-content-between bg-light border">
           <Link to="/productdetails" className="btn btn-sm text-dark p-0"  onClick={() => handleClick(idx)}>
             <i className="fas fa-eye text-primary mr-1"></i>View Detail
           </Link>
           <button className="btn btn-sm text-dark p-0"  onClick={() => addToCart(topProducts, idx)}>
             <i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart
           </button>
         </div>
       </div>
     </div>
   ));
      
  return (
    <div>
      <div className="container-fluid pt-5">
        <div className="text-center mb-4">
            <h2 className="section-title px-5"><span className="px-2">Trandy Products</span></h2>
        </div>
        <div className="row px-xl-5 pb-3">
            {topProductList}
        </div>
    </div>
    </div>
  )
}

export default TopProducts