import React from 'react'
import { Link } from 'react-router-dom'

const Confirmation = (props) => {
    
  return (
    <div>
      <div>
      <section className="container10">
        <div className="form Signin">
          <div className="form-content">
            <header >{props.confo}</header>
           

            <div className="form-link">
              <span>
                <Link to="/" className="link signup-link">go to Home</Link>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}

export default Confirmation
