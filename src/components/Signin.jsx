import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';

const Signin = (props) => {
  const [email, setEmail] = useState('');
  const [passw, setPassw] = useState('');


  const fetchSignInData = (e) => {
    e.preventDefault();
    fetch('http://localhost:8000/SignIn', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: passw,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.length !== 0) {
          console.log('User Exist');
          props.setUserData(data);
          props.setConfirm("Login Successful!")
        } else {
          console.log("User Don't Exist");
          props.setConfirm("Login Failed!")
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <section className="container10">
        <div className="form Signin">
          <div className="form-content">
            <header>Sign in</header>
            <form action="#">
              <div className="field input-field">
                <input type="email" placeholder="Email" className="input" id="email" onChange={(e) => setEmail(e.target.value)} />
              </div>

              <div className="field input-field">
                <input type="password" placeholder="Password" className="password" onChange={(e) => setPassw(e.target.value)} onBlur={fetchSignInData}/>
                <i className="bx bx-hide eye-icon"></i>
              </div>

              <div className="form-link">
                <a href="#" className="forgot-pass">
                  Forgot password?
                </a>
              </div>

           <div className="field button-field">
           <Link to="/confirmation"><button>Login</button></Link>
              </div>
            </form>
 
            <div className="form-link">
              <span>
                Don't have an account? <Link to="/signup" className="link signup-link">Signup</Link>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signin;

