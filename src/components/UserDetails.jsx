import React, { useEffect, useState } from 'react'
import Topbar from './Topbar'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const UserDetails = (props) => {
 
        
        const [userDetails, setUserDetails] = useState([{
            _id: props.userObject,
            userId: '',
            firstName: '',
            lastName: '',
            email: '',
            contactNumber: '',
            address: '',
            city:'',
            state: '',
            country: '',
            pincode: ''
        }]);
        
        useEffect(() => {
            if(props.userData[0]._id === undefined){
                alert("Please Login First!!")
            }else{
                
            fetch('http://localhost:8000/getUserData', {
              method: 'POST',
              body: JSON.stringify({
                userId: props.userData[0]._id,
              }),
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
            })
              .then((response) => response.json())
              .then((data) => {
                console.log(data);
                if(data.length !== 0){
                    setUserDetails(data);
                    props.setUserObj(data[0]._id)
                }
                
              })
              .catch((err) => {
                console.log(err.message);
              });
            }
          }, [props.userData[0]._id]);

        
  return (
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
                            <input type="text" className="form-control" id="name" placeholder="First Name" readOnly
                                required="required" data-validation-required-message="Please enter Product name" value={userDetails[0].firstName} />
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <input type="text" className="form-control" id="category" placeholder="Last Name" readOnly
                                required="required" data-validation-required-message="Please enter Product name" value={userDetails[0].lastName} />
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <input type="number" className="form-control" id="price" placeholder="Phone Number" readOnly
                                required="required" data-validation-required-message="Please enter Product price" value={userDetails[0].contactNumber}  />
                            <p className="help-block text-danger"></p>
                        </div>
                        
                        <div className="control-group">
                            <textarea className="form-control" rows="6" id="message" placeholder="Address" readOnly
                                required="required"
                                data-validation-required-message="Please enter product information" value={userDetails[0].address} ></textarea>
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <input type="text" className="form-control" id="city" placeholder="City " readOnly
                                required="required" data-validation-required-message="Please enter seller address" value={userDetails[0].city}  />
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <input type="text" className="form-control" id="category" placeholder="State" readOnly
                                required="required" data-validation-required-message="Please enter Product name" value={userDetails[0].state} />
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <input type="text" className="form-control" id="category" placeholder="Country" readOnly
                                required="required" data-validation-required-message="Please enter Product name" value={userDetails[0].country} />
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <input type="number" className="form-control" id="pincode" placeholder="Pincode" readOnly  
                                required="required" data-validation-required-message="Please enter Pincode" value={userDetails[0].pincode}/>
                            <p className="help-block text-danger"></p>
                        </div>
                        
                        <div>
                            <Link to='/edituser'><button className="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton">Edit Details</button></Link>
                        </div>
                    </form>
                    
                </div>
               
            </div>
            
            </div>
        </div>
    </div>
  )
}

export default UserDetails
