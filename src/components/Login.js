import React, { useState } from "react";
import axiosWithAuth from "../util/axiosWithAuth";
import "./Login.css";

function Login(props) {
  const [cred, setCred] = useState({
    credentials: {
      username: "",
      password: "",
    },
  });

  const handleChange = (e) => {
    setCred({
      credentials: { ...cred.credentials, [e.target.name]: e.target.value },
    });
  };

  const login = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .post("/api/auth/login", cred.credentials)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        //store res.data.id into context api
        props.history.push("/protected");
      })
      .catch((err) => {
        console.log("ERR", err);
      });
  };

  return (
    <div class="login">
      {console.log(cred.credentials)}
      <h6>Water My Plant</h6>
      <h1>Login</h1>
      <form  method="post" onSubmit={(e) => login(e)}>
        

        <p>
          <input
            type="text"
            name="username"
            placeholder="UserName"
            required="required"
            value={cred.credentials.username}
            onChange={handleChange}
          />
        </p>

        <p>
           
          <input
            type="password"
            name="password"
            placeholder="Password"
            required="required"
            value={cred.credentials.password}
            onChange={(e) => handleChange(e)}
          />
        </p>

        <p>
          <button class="btn btn-primary btn-block btn-large" type="submit" value="Log in">
            Log in
          </button>
        </p>
      </form>
    </div>
  );
}

export default Login;
