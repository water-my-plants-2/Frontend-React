import React, { useState} from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { Button } from 'reactstrap';

const Plants = () => {

    const [ plantList, setPlantList] = useState([]);

    axios
    .get ("https://water-my-plants2-be.herokuapp.com//api/:id/plants")
    .then(response => {
        console.log(response.data);
        setPlantList(response.data);
    })
    .catch(error => console.log(error));

    return (
        <div>
            <h1>YOUR PLANTS</h1>
            <Link to="/plant-form">
            <button>Add Plant</button>
            </Link>
            <div className='addedPlants'>
                {plantList.map( (plants, id) => {
                    return(
                        <div className="plants" key={id}>
                            <h1>Plant Name: {plants.nickname}</h1>
                            <p>Plant Species: {plants.species}</p>
                            <p>Water Frequency: {plants.h2o_frequency}</p>
                    </div>
                    );
                })}
            </div>
        </div>
    );

}  

export default Plants;

