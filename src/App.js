import Cart from "./components/Cart";

import Categorypage from "./components/Categorypage";
import Contact from "./components/Contact";
import Favourites from "./components/Favourites";
import Feed from "./components/Feed";

import Index from "./components/Index";

import Productdetails from "./components/Productdetails";
import SearchFeed from "./components/SearchFeed";
import Seller from "./components/Seller";
import Signin from "./components/Signin";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Offers from "./components/Offers";
import { useState } from "react";

import Confirmation from "./components/Confirmation";
import UserDetails from "./components/UserDetails";
import EditUserDetails from "./components/EditUserDetails";
  
function App() {
const [selectedCategory, setSelectedCategory] = useState("Academics");
const [product, setProduct] = useState("haha");
const [userData, setUserData] = useState([{"email": "Login"}]);
const [confo, setConfo] = useState("hello");
const [searchTerm, setSearchTerm] = useState();
const [userObject, setUserObject] = useState("ahfvb");


function setUserObj(data){
  setUserObject(data);
}

function setConfirm(data){
  setConfo(data);
}


function selectSearchTerm(data){
  setSearchTerm(data);
}




function setProductDetails(data){
  setProduct(data);
}

 function selectCategory(data){
  setSelectedCategory(data);
 }
  return (
   <div>
    <BrowserRouter>
 
    <Routes>
    <Route path="/" element={<Index  selectCategory={selectCategory} category = {selectedCategory} userData={userData} setProductDetails={setProductDetails} selectSearchTerm={selectSearchTerm}/>}></Route>
    <Route path="feed" element={<Feed category = {selectedCategory} setProductDetails={setProductDetails} userData={userData} selectSearchTerm={selectSearchTerm}/>} />
    <Route path="categories" element={<Categorypage selectCategory={selectCategory} userData={userData} selectSearchTerm={selectSearchTerm}/>} />
    <Route path="searchFeed" element={<SearchFeed searchTerm={searchTerm} selectSearchTerm={selectSearchTerm} setProductDetails={setProductDetails} userData={userData}/>} />
    <Route path="contact" element={<Contact userData={userData} selectSearchTerm={selectSearchTerm}/>} />

    <Route path="cart" element={<Cart userData={userData} selectSearchTerm={selectSearchTerm} setProductDetails={setProductDetails}/>} />
    <Route path="signin" element={<Signin setUserData={setUserData} setConfirm={setConfirm} />} />
    <Route path="signup" element={<Signup setConfirm={setConfirm} setUserData={setUserData}/>} />
    <Route path="productdetails" element={<Productdetails product={product} userData={userData} selectSearchTerm={selectSearchTerm}/>} />
    <Route path="favourites" element={<Favourites />} />
    <Route path="seller" element={<Seller userData={userData} selectSearchTerm={selectSearchTerm}/>} />
    <Route path="offers" element={<Offers />} />
    <Route path="userdetails" element={<UserDetails userData={userData} selectSearchTerm={selectSearchTerm} setUserObj={setUserObj} userObject={userObject}/>} />
    <Route path="edituser" element={<EditUserDetails userData={userData} selectSearchTerm={selectSearchTerm} userObject={userObject}/>} />
    <Route path="confirmation" element={<Confirmation confo = {confo}/>} />
   
    </Routes>
 
    </BrowserRouter>
   </div>
  );
}

export default App;
