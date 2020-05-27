import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const PlantForm = (props) => {

    const [plants , setPlants] = useState({
        name: '',
        nickname: '',
        species: '',
        h20frequency: '',
    });



    const clearForm = () => {
        setPlants({
            name: '',
            nickname: '',
            species: '',
            h20frequency: '',
        })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // props.addPlant(plants);
        clearForm();
      };

      const handleChange = (event) => {
        setPlants({ ...plants, [event.target.name]: event.target.value });
      };



      return ( 
    
          <form onSubmit={ handleSubmit }>
              <label htmlFor="name">Plant Name:</label>
              <input 
              id="name"
              name="name"
              type="text"
            placeholder="Type plant name here."
            value={plants.name}
            onChange={handleChange}
              />
              <br/>
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
              <label htmlFor="h20frequency">
             Watering Schedule
          < select
            name="h20frequency"
            id="h20frequency"
            value={plants.h20frequency}
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