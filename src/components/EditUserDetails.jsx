import React, { useState } from 'react'
import Topbar from './Topbar';
import Navbar from './Navbar';

const EditUserDetails = (props) => {
    const [firstName, setFirstName] = useState();
        
        const [lastName, setLastName] = useState();
    
        
        const [city, setCity] = useState();
        const [state, setState] = useState();
        const [address, setAddress] = useState();
        const [number, setNumber] = useState();
        const [pincode, setPincode] = useState();
        const [country, setCountry] = useState('');
        
          const handleClick = (e) => {
            e.preventDefault();
           if(props.userData[0]._id === undefined){
            alert("Please Login First!!")
           }else{
            fetch('http://localhost:8000/deleteUserData', {
        method: 'DELETE',
        body: JSON.stringify({
            _id: props.userObject,
            
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
            
        })
        .catch((err) => {
          console.log(err.message);
        });




        fetch('http://localhost:8000/UserData', {
        method: 'POST',
        body: JSON.stringify({
            userId: props.userData[0]._id,
            firstName: firstName,
            lastName: lastName,
            email: props.userData[0].email,
            contactNumber: number,
            address: address,
            city: city,
            state: state,
            country: country,
            pincode: pincode,
            
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
            alert("Details Saved!!")
        })
        .catch((err) => {
          console.log(err.message);
        });
           }
          };
  return (
    <div>
      <div>
      <Topbar selectSearchTerm={props.selectSearchTerm}/>
      <Navbar userData={props.userData}/>
      <div className="container-fluid pt-5">
        <div className="text-center mb-4">
            <h2 className="section-title px-5"><span className="px-2">User Details</span></h2>
        </div>
        <div className="row px-xl-5"style={{display: "flex", justifyContent: "center"}}>
            <div className="col-lg-7 mb-5" >
                <div className="contact-form">
                    <div id="success"></div>
                    <form name="sentMessage" id="contactForm" noValidate="novalidate" encType="multipart/form-data"> 
                    <div className="control-group">
                            <input type="text" className="form-control" id="name" placeholder="First Name"
                                required="required" data-validation-required-message="Please enter Product name"  onChange={(e) => setFirstName(e.target.value)}/>
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <input type="text" className="form-control" id="category" placeholder="Last Name"
                                required="required" data-validation-required-message="Please enter Product name"  onChange={(e) => setLastName(e.target.value)}/>
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <input type="number" className="form-control" id="price" placeholder="Phone Number"
                                required="required" data-validation-required-message="Please enter Product price"  onChange={(e) => setNumber(e.target.value)} />
                            <p className="help-block text-danger"></p>
                        </div>
                        
                        <div className="control-group">
                            <textarea className="form-control" rows="6" id="message" placeholder="Address"
                                required="required"
                                data-validation-required-message="Please enter product information" onChange={(e) => setAddress(e.target.value)}  ></textarea>
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <input type="text" className="form-control" id="city" placeholder="City "
                                required="required" data-validation-required-message="Please enter seller address"  onChange={(e) => setCity(e.target.value)}/>
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <input type="text" className="form-control" id="category" placeholder="State"
                                required="required" data-validation-required-message="Please enter Product name"  onChange={(e) => setState(e.target.value)}/>
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <input type="text" className="form-control" id="category" placeholder="Country"
                                required="required" data-validation-required-message="Please enter Product name"  onChange={(e) => setCountry(e.target.value)}/>
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <input type="number" className="form-control" id="pincode" placeholder="Pincode"
                                required="required" data-validation-required-message="Please enter Pincode" onChange={(e) => setPincode(e.target.value)}/>
                            <p className="help-block text-danger"></p>
                        </div>
                        
                        <div>
                            <button className="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton" onClick={handleClick}>Save Details</button>
                        </div>
                    </form>
                    
                </div>
               
            </div>
            
            </div>
        </div>
    </div>
    </div>
  )
}

export default EditUserDetails
