
import React, { useState , useEffect} from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import PlantList from "./PlantList";
import PlantForm from "./Plants-Form"


const Plants = () => {

     const [ plantList, setPlantList] = useState([
         {
             nickname: "Tiger Lily",
             species: "Flower",
             h2o_frequency: "Once a week"
         }
     ]);

     const addNewPlant = plants => {
        const newPlants = {
          nickname: plants.nickname,
          species: plants.species,
          h2o_frequency: plants.h2o_frequency
        };
        setPlantList([...plantList, newPlants]);
      };

    // useEffect(() => {
    //     axios
    //    .get('https://water-my-plants2-be.herokuapp.com/api/:id/plants')
    //         .then(res => {
    //             setPlantList(res.data);
        
    //         })
    //        .catch(err => console.log(err));

    // }, []);

   
    
     return (
         <div>
            <div className='addedPlants'>
            <h2>Plants</h2>
            <PlantForm addNewPlant={addNewPlant} />
                {plantList.map( (plants, id) => {
                     return(
                         <PlantList key={id} plants={plants}/>
                         
                     );
                })}
             </div>
         </div>
    );

 }  
 export default Plants;


