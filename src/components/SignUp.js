import React, { useState } from "react";
import axiosWithAuth from "../util/axiosWithAuth";
import "./Login.css";

function Signup(props) {
  const [signUp, setSignUp] = useState({
    newCreds: {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      phoneNumber: "",
    },
  });

  const handleChange = (e) => {
    setSignUp({
      newCreds: {
        ...signUp.newCreds,
        [e.target.name]: e.target.value,
      },
    });
  };

  const register = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/auth/register", signUp.newCreds)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        props.history.push("/plantslist");
      })
      .catch((err) => console.log("signup error", err));
    //setSignUp({newCreds: ""})
  };

  return (
    <div class="login">
      {console.log(signUp.newCreds)}

      <h1> Sign Up</h1>

      <form method="post" onSubmit={(e) => register(e)}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          required="required"
          value={signUp.newCreds.firstName}
          onChange={(e) => handleChange(e)}
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          required="required"
          value={signUp.newCreds.lastName}
          onChange={(e) => handleChange(e)}
        />

        <input
          type="text"
          name="username"
          placeholder="username"
          required="required"
          value={signUp.newCreds.username}
          onChange={(e) => handleChange(e)}
        />

        <input
          type="password"
          name="password"
          placeholder="password"
          required="required"
          value={signUp.newCreds.password}
          onChange={(e) => handleChange(e)}
        />

        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          required="required"
          value={signUp.newCreds.phoneNumber}
          onChange={(e) => handleChange(e)}
        />

        <button class="btn btn-primary btn-block btn-large">Sign up</button>
      </form>
    </div>
  );
}

export default Signup;
