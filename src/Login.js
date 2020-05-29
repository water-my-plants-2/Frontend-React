import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import { Link } from 'react-router-dom';



const formSchema = yup.object().shape({
    username: yup.string().required("Please enter your username"),
    password: yup.string()
    .min(7 , "Must have more that 7 characters")
    .required("Must enter"),
});


function Login () {

    const [ login, setLogin ] = useState({
        username:'',
        password:'',
    })

    const [buttonDisabled, setButtonDisabled] = useState(true);
    useEffect(() => {
    formSchema.isValid(login).then(valid => {
      setButtonDisabled(!valid);
    });
  }, [login]);


  const [setPost] = useState({});

    const [error , setError] = useState({
        username:"",
        password:"",
    });

     //validating my schema 
     const validate = e => {
      let value =
        e.target.type === "checkbox" ? e.target.checked : e.target.value;
      yup
        .reach(formSchema, e.target.name)
        .validate(value)
        .then(valid => {
          setError({
            ...error,
            [e.target.name]: ""
          });
        })
        .catch(err => {
          setError({
            ...error,
            [e.target.name]: err.errors[0]
          });
        });
    };

      
    const inputChange = e => {
      e.persist();
      validate(e);
      let value =
        e.target.type === "checkbox" ? e.target.checked : e.target.value;
      setLogin({ ...login, [e.target.name]: value });
    };

    //submit my form
    const formSubmit = e => {
      e.preventDefault();
      console.log("Logging in!");
      axios
        .post("https://water-my-plants2-be.herokuapp.com/api/auth/login", login)
        .then((res) => {
          setPost(res.data);
          console.log("Logging in", res)
      })
        .catch(err => console.log(err));
    };
   

    return(

      <form onSubmit={formSubmit}>
                <h3>Welcome Back!</h3>
                <h4>Log into your account</h4>

             
           <label htmlFor="username">
               Username
          <input
          type="text"
          name="username"
          id="username"
          value={login.username}
          onChange={inputChange}
        />
         {error.username.length > 0 ? (
          <p className="error">{error.username}</p>
        ) : null}

           </label>
           <br/>
           <label htmlFor="password">
               Password 
            <input
          type="password"
          name="password"
          id="password"
          value={login.password}
          onChange={inputChange}
        />
         {error.password.length > 7 ? (
          <p className="error">{error.password}</p>
        ) : null}

           </label>
           <br/>
          
                    
           {/* <Link to='/profile'> */}
        <button disabled={buttonDisabled}>
           Login
           </button> 
         {/* </Link> */}

      
           <pre>{JSON.stringify(Login, null, 2)}</pre>
        </form>
    );
}

export default Login;

 
