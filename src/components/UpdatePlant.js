import React, { useState } from "react";
 
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
    <div>
      <form onSubmit={handleSubmit}>
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
        <input
          type="text"
          name="h2o_frequency"
          onChange={changeHandler}
          placeholder="h2o_frequency"
          value={update.h2o_frequency}
        />
        <button> Update </button>
      </form>
    </div>
  );
};
export default UpdatePlant;
