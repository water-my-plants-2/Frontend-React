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


  const [post, setPost] = useState({});

    const [error , setError] = useState({
        username:"",
        password:"",
    });

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


    const formSubmit = e => {
      e.preventDefault();
      console.log("form submitted!");
      axios
        .post("https://water-my-plants2-be.herokuapp.com/api/auth/login", login)
        .then( (response) => {
          setPost(response.data);
          console.log("Login", response);
        })
        .catch((err) => console.log(err.res));
        setLogin({
                username:'',
                password:'',
              })
    };
   

    return(
        <form onSubmit={formSubmit}>
           <div className='login'>
                <h2>Welcome Back!</h2>
                <p>Log into your account</p>

             
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
           <Link to='/plant-form'>
           <button disabled={buttonDisabled}>Next</button>
           </Link>

           </div>
    
           <pre>{JSON.stringify(Login, null, 2)}</pre>
        </form>
    );
}

export default Login;