import React, { useState } from "react";
import axiosWithAuth from "../util/axiosWithAuth";

function AddPlant({ plants }) {
  const [plant, setPlant] = useState({
    nickname: "",
    species: "",
    h2o_frequency: "",
  });

  const handleChange = (e) => {
    setPlant({
      ...plant,
      [e.target.name]: e.target.value,
    });
  };

  const addNewPlant = (e, id) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/plants", plant)
      .then((res) => {console.log(res)
        window.location.reload();
    })
      .catch((err) => console.log("ERR", err));
  };

  return (
    <form  onSubmit={addNewPlant}>
    
      <label>Plant Nickname:</label>
      <input
        id="nickname"
        name="nickname"
        type="text"
        placeholder="Type nickname here."
        value={plant.nickname}
        onChange={handleChange}
      />
      <br />
      <label>Species:</label>
      <input
        id="species"
        name="species"
        type="text"
        placeholder="Type species here."
        value={plant.species}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="h2o_frequency">
      <h7 className="sch"> Watering Schedule </h7>
        <select
          name="h2o_frequency"
          id="h2o_frequency"
          value={plant.h2o_frequency}
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

      <button type="submit" onClick={addNewPlant}>
        Add Plant
      </button>
    </form>
  );
}

export default AddPlant;
