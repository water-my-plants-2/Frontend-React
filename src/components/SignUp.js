import React, { useState } from "react";
import axiosWithAuth from "../util/axiosWithAuth";

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
    <div>
      {console.log(signUp.newCreds)}

      <div>
        <h2> Signup</h2>
      </div>
      <div>
        <form onSubmit={(e) => register(e)}>
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
            placeholder="new-username"
            required="required"
            value={signUp.newCreds.username}
            onChange={(e) => handleChange(e)}
          />

          <input
            type="password"
            name="password"
            placeholder="newp-assword"
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

          <button>Sign up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
