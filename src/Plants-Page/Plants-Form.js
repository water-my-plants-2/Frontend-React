import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup';

const formSchema = yup.object().shape({
  nickname: yup
  .string()
  .required("Must enter nickname"),
  species: yup
  .string()
  .required("Must enter species")
});

const PlantForm = (props) => {

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


    const validate = e => {
      yup
        .reach(formSchema, e.target.value)
        .validate(e.target.name)
        .then(valid => {
          setError({
            [e.target.name]: e.target.value
          });
        })
        .catch(err => {});
    };

    const handleSubmit = (e) =>{
      e.preventDefault();
      validate(e);
      props.addPlant(plants);
      setPlants({
        nickname: '',
        species: '',
        h2o_frequency: '',
      })
    }

      const handleChange = (event) => {
        setPlants({ ...plants, [event.target.name]: event.target.value });
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
          </select>
        </label>

            <Link to="/plants">
            <button type="submit">Submit</button>
            </Link>
              </form>

        

      )
}

export default PlantForm;