
import React, { useState } from "react";

// import * as yup from "yup";
import axios from 'axios';

// const formSchema = yup.object().shape({
//   title: yup
//     .string()
//     .min(2, "Requires 2 characters")
//     .required("Must enter"),
//   body: yup.string().required("Must enter something")
// });

const PlantForm = props => {
  const [plants, setPlants] = useState({
    nickname: '',
    species: '',
    h2o_frequency: '',
  });

  const [error, setError] = useState({
    nickname: '',
    species: '',
    h2o_frequency: '',
  });

  // const validation = e => {
  //   yup
  //     .reach(formSchema, e.target.value)
  //     .validate(e.target.name)
  //     .then(valid => {
  //       setError({
  //         [e.target.name]: e.target.value
  //       });
  //     })
  //     .catch(err => { });
  // };



  const handleChanges = event => {
    setPlants({ ...plants, [event.target.name]: event.target.value });
    console.log(plants);
  };


  const addNewPlant = e => {
    e.preventDefault();
    console.log("Adding Plant!");
    axios
      .post("https://water-my-plants2-be.herokuapp.com/api/plants", plants)
      .then(response => console.log(response))
      .catch(err => console.log(err));
      props.addNewPlant(plants);
      setPlants({
        nickname: '',
        species: '',
        h2o_frequency: '',
      })
  };


  return (
    <form onSubmit={addNewPlant}>
      <label htmlFor="nickname">Name</label>
      <input
        onChange={handleChanges}
        id="nickname"
        type="text"
        name="nickname"
        value={plants.nickname}
      />
      <br/>
      <label htmlFor="species">Species</label>
      <input
        onChange={handleChanges}
        id="species"
        type="text"
        name="species"
        value={plants.species}
      />
      <br/>
      <label htmlFor="note">Water Schedule
      < select
            name="h2o_frequency"
            id="h2o_frequency"
            value={plants.h2o_frequency}
            onChange={handleChanges}
          >
            <option value="">-Please Select One-</option>
            <option value="Once a day">Once a day</option>
            <option value="Twice a day">Twice a day</option>
            <option value="Three times a day">Three times a day</option>
            <option value="Every other day">Every other day</option>
            <option value="Every two days">Once every two days</option>
            <option value="Every three days">Once every three days</option>
            <option value="Once a week">Once a week</option>
            <option value="Once every two weeks">Once every two weeks</option>
            <option value="Once every two weeks">Once a month</option>
          </select>
        </label>
      <button type="submit" onClick={addNewPlant}>Add Plant</button>
    </form>
  );
};

export default PlantForm;
