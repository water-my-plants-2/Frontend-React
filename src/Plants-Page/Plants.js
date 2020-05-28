import React, { useState} from "react";
import { Link } from 'react-router-dom';


const Plants = ( props ) => {

    // const [plantList, setPlantList] = useState({
    //     name: '',
    //           nickname: '',
    //           species: '',
    //           h20frequency: '',
    //   });
      
    //   const addPlant = newPlant => {
    //     setPlantList([...plantList, newPlant]);
    //   };

return ( 
<Link to='/plant-form'>
<button>
    ADD PLANTS HERE
</button>
</Link>
)

}  

export default Plants;



// {props.plantList.map ((plants , id ) => {
//     return (
//         <div className="addedplants" key={id}>
//             <h1>Plant Name: {plants.name}</h1>
//             <p>Plant Nickname: {plants.nickname}</p>
//             <p>Plant species: {plants.species}</p>
//             <p>Water Schedule: {plants.h20frequency}</p>
//         </div>