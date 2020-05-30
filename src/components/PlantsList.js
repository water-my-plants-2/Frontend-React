import React, { useState, useEffect } from "react";
import axiosWithAuth from "../util/axiosWithAuth";

function PlantsList(props) {
  const [plants, setPlants] = useState([]);
  //const { id } = props.match.params;
  console.log(plants);

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/plants`)
      .then((res) => {
        console.log(res);
        setPlants(res.data);
      })
      .catch((err) => console.log("ERROR", err));
  }, []);

  const deleteHandler = (id) => {
    axiosWithAuth()
      .delete(`/api/plants/${id}`)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log("ERROR", err));
  };

  const editHandler = (id) => {
    props.history.push(`plants/${id}`);
  };

  return (
    <div>
      {plants.map((x) => {
        return (
          <div key={x.id}>
            <h3>Name: {x.nickname}</h3>
            <h3>Species: {x.species}</h3>
            <h3>h2o_frequency: {x.h2o_frequency}</h3>
            <button onClick={() => deleteHandler(x.id)}>Remove Plant</button>
            <button onClick={() => editHandler(x.id)}>Edit Plant</button>
          </div>
        );
      })}
    </div>
  );
}

export default PlantsList;
