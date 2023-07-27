import React, { useState } from 'react';
import Topbar from './Topbar';
import Navbar from './Navbar';

const Seller = (props) => {
  const [name, setName] = useState();
  const [userId, setUserId] = useState();
  const [category, setCategory] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [info, setInfo] = useState();
  const [address, setAddress] = useState();
  const [number, setNumber] = useState();
  const [pincode, setPincode] = useState();
  const [images, setImages] = useState('');
  console.log(images);

  const handleClick = async (e) => {
    e.preventDefault();
    if (props.userData[0]._id === undefined) {
      console.log("logIn first");
    } else {
      setUserId(props.userData[0]._id);
      const formData = new FormData();
  
      formData.append("userId", userId);
      formData.append("category", category);
      formData.append("name", name);
      formData.append("price", price);
      formData.append("desc", description);
      formData.append("info", info);
      formData.append("address", address);
      formData.append("number", number);
      formData.append("pincode", pincode);
  
      // Instead of setting the files directly, append each file individually.
      for (let i = 0; i < images.length; i++) {
        formData.append(`images`, images[i]);
      }
  
      try {
        const response = await fetch("http://localhost:8000/AddProducts", {
          method: "POST",
          body: formData,
        });
  
        const data = await response.json();
        console.log(data);
        alert("Product Registered!!")
      } catch (err) {
        console.log(err.message);
        alert("Product Registration Failed")
      }
    }
  };
  





  return (
    <div>
      <Topbar selectSearchTerm={props.selectSearchTerm}/>
      <Navbar userData={props.userData}/>
      <div className="container-fluid pt-5">
        <div className="text-center mb-4">
            <h2 className="section-title px-5"><span className="px-2">Product Registration</span></h2>
        </div>
        <div className="row px-xl-5"style={{display: "flex", justifyContent: "center"}}>
            <div className="col-lg-7 mb-5" >
                <div className="contact-form">
                    <div id="success"></div>
                    <form name="sentMessage" id="contactForm" encType="multipart/form-data"> 
                        <div className="control-group">
                            <input type="text" className="form-control" id="name" placeholder="Product Name"
                                required="required" data-validation-required-message="Please enter Product name" onChange={(e) => setName(e.target.value)}/>
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <input type="text" className="form-control" id="category" placeholder="Product Category"
                                required="required" data-validation-required-message="Please enter Product name" onChange={(e) => setCategory(e.target.value)}/>
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <input type="number" className="form-control" id="price" placeholder="Product Price(₹)"
                                required="required" data-validation-required-message="Please enter Product price" onChange={(e) => setPrice(e.target.value)}/>
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <textarea className="form-control" rows="6" id="message" placeholder="Product Description"
                                required="required"
                                data-validation-required-message="Please enter product description" onChange={(e) => setDescription(e.target.value)}></textarea>
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <textarea className="form-control" rows="6" id="message" placeholder="Product Information"
                                required="required"
                                data-validation-required-message="Please enter product information"onChange={(e) => setInfo(e.target.value)}></textarea>
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <input type="text" className="form-control" id="Address" placeholder="Seller Address "
                                required="required" data-validation-required-message="Please enter seller address" onChange={(e) => setAddress(e.target.value)}/>
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <input type="number" className="form-control" id="Contact Number" placeholder="Contact Number"
                                required="required" data-validation-required-message="Please enter contact number" onChange={(e) => setNumber(e.target.value)}/>
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <input type="number" className="form-control" id="pincode" placeholder="Pincode"
                                required="required" data-validation-required-message="Please enter Pincode" onChange={(e) => setPincode(e.target.value)}/>
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                        <input
  name="images"
  type="file"
  className="form-control"
  id="photo"
  accept="image/*"
  required="required"
  data-validation-required-message="Please enter Pincode"
  multiple
  onChange={(e) => {
    setImages(e.target.files);
  }}
/>
        <p className="help-block text-danger"></p>
      </div>
      <div>
        <button
          className="btn btn-primary py-2 px-4"
          type="submit"
          id="sendMessageButton"
          onClick={handleClick}
        >
          Register Product
        </button>
      </div>
                    </form>
                    
                </div>
               
            </div>
            
            </div>
        </div>
    </div>
  )
}

export default Seller
