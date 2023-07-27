import React, { useEffect, useState } from 'react';
import Topbar from './Topbar';
import Footer from './Footer';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Cart = (props) => {
  const [log, setLog] = useState([]);
  const [deletedItem, setDeletedItem] = useState();
 
  const removeItem = (product) => {
    fetch('http://localhost:8000/deleteFromCart', {
      method: 'DELETE',
      body: JSON.stringify({
        _id: product._id,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDeletedItem(data)
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const fetchItemByName = (product) => {
    fetch('http://localhost:8000/SearchProducts', {
      method: 'POST',
      body: JSON.stringify({
        productName: product.pName,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        props.setProductDetails(data[0])
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    fetch('http://localhost:8000/getPurchaseLogbyId', {
      method: 'POST',
      body: JSON.stringify({
        bId: props.userData[0]._id,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLog(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [deletedItem, props.userData]); // Only run the effect when props.userData changes.

  const cartData = log.map((product) => (
    <tr key={product._id}>
      <td className="align-middle">{product.pName}</td>
      <td className="align-middle">{product.sId}</td>
      <td className="align-middle">{product.pCategory}</td>
      <td className="align-middle">
        <Link to={`/productdetails`} className="btn btn-sm text-dark p-0">
          <i className="fas fa-eye text-primary mr-1" onClick={() => fetchItemByName(product)}></i>View Detail
        </Link>
      </td>
      <td className="align-middle">
        <button className="btn btn-sm btn-primary" onClick={() => removeItem(product)}>
          {/* Using an arrow function here to pass product to removeItem when clicked */}
          <i className="fa fa-times"></i>
        </button>
      </td>
    </tr>
  ));

  return (
    <div>
      <Topbar selectSearchTerm={props.selectSearchTerm}/>
      <Navbar userData={props.userData}/>
      <div className="container-fluid bg-secondary mb-5">
        {/* ... */}
      </div>
      <div className="container-fluid pt-5">
        <div className="row px-xl-5" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="col-lg-8 table-responsive mb-5">
            <table className="table table-bordered text-center mb-0">
              <thead className="bg-secondary text-dark">
                <tr>
                  <th>Product Name</th>
                  <th>Seller ID</th>
                  <th>Product Category</th>
                  <th>View Product Details</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody className="align-middle">{cartData}</tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;

