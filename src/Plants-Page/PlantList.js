import React from 'react';

function PlantList (props) {
    return (
        <div className="plants">
            <h4>Name:{props.plants.nickname}</h4>
            <p>Species:{props.plants.species}</p>
            <p>Water Schedule:{props.plants.h2o_frequency}</p>
        </div>
    )
}

export default PlantList;


