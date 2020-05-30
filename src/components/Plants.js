 /*import React, { useState } from "react";
import axiosWithAuth from "../util/axiosWithAuth";

function Plants(props) {
  const [plants] = useState({
    nickname: "ROSE",
    h2o_frequency: "Once",
    species: "Rose",
  });
  console.log(plants);

  axiosWithAuth()
    .post(`/api/plants`, plants)
    .then((res) => console.log(res))
    .catch((err) => console.log("ERR", err));

  return (
    <>
      <label>Plant Nickname:</label>
      <div>{plants.nickname}
      </div>
      <br />

      <label>h2o_frequency:</label>
      
      <div>{plants.h2o_frequency}</div>  
      
      <br />
      <label>Species:</label>
      <div>{plants.species}</div>
      
      <br />
    </>
  );
}

export default Plants;
*/