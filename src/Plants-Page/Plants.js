import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PlantForm from './Plants-Form';


function Plants (props) {

    // const addPlant = newPlants => {
        
    //         setPlants([...plants, newPlants]);
    //     }

    
    return (
        <div className='addplant'>  
         <h1>Plants</h1>
         {/* <PlantForm addPlant={addPlant} />
        <Plants data={plant}/> */}
        <Link to="/plants-form">
        <button>
            ADD A PLANT
        </button>
    
        </Link>
        

        {/* <div className='plants'>
            {props.data.map( ( plants , id ) =>{
                return (
                    <div key = {id}>
                        <h2>{plants.name}</h2>
                        <p>{plants.nickname}</p>
                        <p>{plants.species}</p>
                        <p>{plants.h20frequency}</p>
                        </div>
                )
            })}
        </div> */}
    </div>
    )
}

export default Plants;