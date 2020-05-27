import React, { useState }from 'react';
import { Route } from 'react-router-dom';


const PlantForm = (props) => {

    return (
        <div>
        <Route path="/plants" component={PlantForm}/>
        </div>
    )
}

export default PlantForm;