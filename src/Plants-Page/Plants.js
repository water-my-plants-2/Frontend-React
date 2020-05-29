import React, { useState , useEffect} from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

const Plants = () => {

     const [ plantList, setPlantList] = useState([]);

    useEffect(() => {
        axios
       .get('https://water-my-plants2-be.herokuapp.com/api/:id/plants')
            .then(res => {
                setPlantList(res.data);
        
            })
           .catch(err => console.log(err));

    }, []);
    
     return (
         <div>
           <h3>Your Plants</h3>
            <div className='addedPlants'>
                {plantList.map( (plants, id) => {
                     return(
                        <div className="plants" key={id}>
                            <h4>Plant Name: {plants.nickname}</h4>
                            <h2>Plant Species: {plants.species}</h2>
                             <h2>Water Frequency: {plants.h2o_frequency}</h2>
                    </div>
                     );
                })}
             </div>
         </div>
    );

 }  

 export default Plants;

