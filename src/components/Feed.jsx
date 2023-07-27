import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Topbar from './Topbar'
import Footer from './Footer'
import Products from './Products'
import Navbar from './Navbar'

const Feed = (props) => {
const categoryName = props.category;

 
  return (
    <div>
           <Topbar selectSearchTerm={props.selectSearchTerm}/>
           <Navbar userData={props.userData}/>
        <Products category={categoryName} setProductDetails={props.setProductDetails} userData={props.userData}/>
    <Footer/>
    </div>
  )
}

export default Feed
