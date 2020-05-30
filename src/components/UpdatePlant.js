import React, { useState, useEffect } from "react";
import axiosWithAuth from "../util/axiosWithAuth";

const initialPlant = {
  id: "",
  nickname: "",
  species: "",
  h2o_frequency: "",
};

const UpdatePlant = (props) => {
  const [update, setUpdate] = useState(initialPlant);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/plants")
      .then((res) => {
        console.log(res);
        setUpdate(res.data);
      })
      .catch((err) => console.log("ERROR", err));
  }, []);

  const changeHandler = (e) => {
    setUpdate({
      ...update,
      [e.target.name]: e.target.value,
    });
  };

  //const handleSubmit = (e,id) => {
    //e.preventDefault();
    //axiosWithAuth()
      //.put(`/api/plants/${update.id}`, update)
      //.then((res) => {
        //props.history.push(`plants/${update.id}`);
      //})
      //.catch((err) => console.log(err));
  //};

  return (
    <div>
      <form>
        <input
          type="text"
          name="nickname"
          onChange={changeHandler}
          placeholder="nickname"
          value={update.nickname}
        />

        <input
          type="text"
          name="Species"
          onChange={changeHandler}
          placeholder="Species"
          value={update.species}
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
