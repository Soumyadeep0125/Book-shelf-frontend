import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = (props) => {
    const [email, setEmail] = useState('');
    const [passw, setPassw] = useState('');
    const [rePassw, setRePassw] = useState('');
    const [error, setError] = useState('');
    const newUser = [];
    const addNewUser = (e) => {
        e.preventDefault();
        console.log(error)
       if(error === '' && passw === rePassw){
        fetch('http://localhost:8000/SignUp', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: passw
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.length !== 0) {
        newUser[0] = data;
        props.setUserData(newUser);
        props.setConfirm("Signin Successful!")
      } else {

        props.setConfirm("Signin Failed!")
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
       }
      };

const checkEmail = (e) => {
    e.preventDefault();

    fetch('http://localhost:8000/CheckUser', {
      method: 'POST',
      body: JSON.stringify({
        email: email,

      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.length !== 0) {
            setError("An Account already exist with this email ID.")
            
        }else{
            setError('')
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
       <section class="container10">
       <div class="form Signin">
                <div class="form-content">
                    <header>Sign Up</header>
                    <form action="#">
                        <div class="field input-field">
                            <input type="email" placeholder="Email" class="input" onChange={(e) => setEmail(e.target.value)} onBlur={checkEmail}/>
                        </div>
                        <div>{error}</div>
                        <div class="field input-field">
                            <input type="password" placeholder="Password" class="password" onChange={(e) => setPassw(e.target.value)}/>
                            <i class='bx bx-hide eye-icon'></i>
                        </div>
                        <div class="field input-field">
                            <input type="password" placeholder="Re-Enter Password" class="password" onChange={(e) => setRePassw(e.target.value)} onBlur={addNewUser}/>
                            <i class='bx bx-hide eye-icon'></i>
                        </div>

                        <div class="form-link">
                            <a href="#" class="forgot-pass">Forgot password?</a>
                        </div>

                        <div class="field button-field">
                            <Link to="/confirmation"><button>SignUp</button></Link>
                        </div>
                    </form>

                    <div class="form-link">
                        <span>Have an account? <Link to='/signin' class="link signup-link">SignIn</Link></span>
                    </div>
                </div>

            </div>

        </section>
    </div>
  )
  }

export default Signup
