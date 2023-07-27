import React from 'react'
import Topbar from './Topbar'
import Footer from './Footer'
import Products from './Products'
import Navbar from './Navbar'
import SearchProducts from './SearchProducts'

const SearchFeed = (props) => {
  console.log(props.searchTerm)
  return (
    <div>
           <Topbar selectSearchTerm={props.selectSearchTerm}/>
           <Navbar userData={props.userData}/>
       <SearchProducts setProductDetails={props.setProductDetails} searchTerm={props.searchTerm} userData={props.userData}/>
    <Footer/>
    </div>
  )
}

export default SearchFeed
