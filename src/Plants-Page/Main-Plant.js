import React, {useState} from 'react';
import Plants from './Plants-Page/Plants';
import PlantForm from './Plants-Page/Plants-Form'


function MainPlant () {

const addPlant = newPlant => {
        //     const newMember = {
        //       name: members.name,
        //       email: members.email,
        //       role: members.role,
        //     }
        
            setPlants([...plants, newPlants]);
        }

    return (
        <div>
            <h1>Plants</h1>
        </div>
    )
}

export default MainPlant;
