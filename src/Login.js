import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import { Link } from 'react-router-dom';


const formSchema = yup.object().shape({
    name: yup.string().required("Please enter your username"),
    password: yup.string()
    .min(7 , "Must have more that 7 characters")
    .required("Must enter"),
});


function Login () {

    const [ login, setLogin ] = useState({
        name:'',
        password:'',
    })

    const [buttonDisabled, setButtonDisabled] = useState(true);
    useEffect(() => {
    formSchema.isValid(login).then(valid => {
      setButtonDisabled(!valid);
    });
  }, [login]);


    const [error , setError] = useState({
        name:"",
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
        .post("https://reqres.in/api/users", login)
        .then(response => console.log(response))
        .catch(err => console.log(err));
        setLogin({
          name:'',
          password:'',
        })
    };


    return(
        <form onSubmit={formSubmit}>
           <div className='login'>
                <h2>Welcome Back!</h2>
                <p>Log into your account</p>

             
           <label htmlFor="name">
               Username
            <input
          type="text"
          name="name"
          id="name"
          value={login.name}
          onChange={inputChange}
        />
         {error.name.length > 0 ? (
          <p className="error">{error.name}</p>
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
           <Link to='/plants'>
           <button disabled={buttonDisabled}>Next</button>
           </Link>

           </div>
    
           <pre>{JSON.stringify(Login, null, 2)}</pre>
        </form>
    );
}

export default Login;