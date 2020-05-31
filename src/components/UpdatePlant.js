import React, { useState } from "react";
import "./Login.css";


import axiosWithAuth from "../util/axiosWithAuth";
const initialPlant = {
  nickname: "",
  species: "",
  h2o_frequency: "",
};
const UpdatePlant = (props) => {
  const { id } = props.match.params;
  const [update, setUpdate] = useState(initialPlant);
  const changeHandler = (e) => {
    setUpdate({
      ...update,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(id);
    axiosWithAuth()
      .put(`/api/plants/${id}`, update)
      .then((res) => {
        props.history.push(`/protected`);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div class="login">
      <h1> Update Plant</h1>
      <form method="post" onSubmit={handleSubmit}>
        <input
          type="text"
          name="nickname"
          onChange={changeHandler}
          placeholder="nickname"
          value={update.nickname}
        />
        <input
          type="text"
          name="species"
          onChange={changeHandler}
          placeholder="Species"
          value={update.Species}
        />
        <label htmlFor="h2o_frequency">
         <h7 className="sch"> Watering Schedule </h7>
          <select
            name="h2o_frequency"
            id="h2o_frequency"
            value={update.h2o_frequency}
            onChange={changeHandler}
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
        <button class="btn btn-primary btn-block btn-large"> Update </button>
      </form>
    </div>
  );
};
export default UpdatePlant;
