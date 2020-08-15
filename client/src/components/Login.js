import React, { useState } from "react";
import axios from "axios";

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [login, setLogin] = useState({
    username: '',
    password: ''
  })

  const handleChanges = e => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    })
    console.log(login)
  }

  const handleSubmit = e => {
    e.preventDefault();

    axios
        .post(`http://localhost:5000/api/login`, login)
        .then(res => {
            console.log(res);
            window.localStorage.setItem('token', res.data.payload)
        })
      props.history.push('/colors')  
}

  return (
    <>
      
      <div className="login-form">
      <h1 className="bubble-animation">Welcome to the Bubble App!</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">
                Username: 
                  <input 
                  type="text"
                  name="username"
                  label="username"
                  value={login.username}
                  onChange={handleChanges}
                  placeholder="Enter Username"
                  className="input"
                  >
                  </input>
              </label>
              <label htmlFor="password">
                Password:
                  <input 
                  type="text"
                  name="password"
                  label="password"
                  value={login.password}
                  placeholder="Enter Password"
                  onChange={handleChanges}
                  className="input"
                  >
                  </input>
              </label>
                <button>Login</button>
            </form>
        </div>
    </>
  );
};

export default Login;
