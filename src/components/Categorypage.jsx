import React from 'react'
import Categories from './Categories'
import Topbar from './Topbar'
import Footer from './Footer'
import Navbar from './Navbar'

const Categorypage = (props) => {
  return (
    <div>
        <Topbar selectSearchTerm={props.selectSearchTerm}/>
        <Navbar userData={props.userData}/>
      <Categories selectCategory={props.selectCategory} />
      <Footer/>
    </div>
  )
}

export default Categorypage
