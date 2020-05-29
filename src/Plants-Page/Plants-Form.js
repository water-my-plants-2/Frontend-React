import React, { useState , useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';


const formSchema = yup.object().shape({
  nickname: yup
  .string()
  .required("Must enter nickname"),
  species: yup
  .string()
  .required("Must enter species"),
  h2o_frequency: yup.string(),
});

const PlantForm = () => {

    const [plants , setPlants] = useState({
        nickname: '',
        species: '',
        h2o_frequency: '',
    });

    const [error, setError] = useState({
      nickname: '',
      species: '',
      h2o_frequency: '',
    });

    const [buttonDisabled, setButtonDisabled] = useState(true);
    useEffect(() => {
    formSchema.isValid(plants).then(valid => {
      setButtonDisabled(!valid);
    });
  }, [plants]);



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

  const handleSubmit = e => {
    e.preventDefault();
    setPlants({
          nickname: '',
          species: '',
          h2o_frequency: '',
       })
    console.log("Adding Plants!");
    axios
      .post("https://water-my-plants2-be.herokuapp.com/api/:id/plants", plants)
      .then(response => console.log(response))
      .catch(err => console.log(err));
  };
    // const handleSubmit = e => {
    //   e.preventDefault();
    //   setPlants({
    //     nickname: '',
    //     species: '',
    //     h2o_frequency: '',
    //   })
    //   console.log("form submitted!");
    //   axios
    //    .post(("https://reqres.in/api/users" , plants)
    //    .then (response => {
    //      console.log(response.data);
    //    })
    //    .catch (error => console.log(error)))
    //   };

      const handleChange = e => {
        e.persist();
        validate(e);
        let value =
          e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setPlants({ ...plants, [e.target.name]: value });
      };



      return ( 
        
          <form onSubmit={ handleSubmit }>

              <label htmlFor="nickname">Plant Nickname:</label>
              <input 
              id="nickname"
              name="nickname"
              type="text"
            placeholder="Type nickname here."
            value={plants.nickname}
            onChange={handleChange}
              />
              {error.nickname.length > 0 ? (
          <p className="error">{error.nickname}</p>
        ) : null}
             
              <br/>
             
              <label htmlFor="species">Species:</label>
              <input 
              id="species"
              name="species"
              type="text"
            placeholder="Type species here."
            value={plants.species}
            onChange={handleChange}
            
              />
           {error.species.length > 0 ? (
          <p className="error">{error.species}</p>
        ) : null}
             

             
              <br/>
             
              <label htmlFor="h2o_frequency">
             Watering Schedule
          < select
            name="h2o_frequency"
            id="h2o_frequency"
            value={plants.h2o_frequency}
            onChange={handleChange}
          >
            <option value="">-Please Select One-</option>
            <option value="Once a day">Once a day</option>
            <option value="Twice a day">Twice a day</option>
            <option value="Three times a day">Three times a day</option>
            <option value="Every other day">Every other day</option>
            <option value="Every two days">Every two days</option>
            <option value="Every three days">Every three days</option>
            <option value="Every four days">Every four days</option>
            <option value="Every five days">Every five days</option>
            <option value="Every six days">Every six days</option>
            <option value="Once a week">Once a week</option>
            <option value="Once every two weeks">Once every two weeks</option>
            <option value="Once every two weeks">Once a month</option>
          </select>
        </label>
       <br/>

            
            <button disabled={buttonDisabled}>Submit</button>
      
              </form>



      )
}

export default PlantForm;