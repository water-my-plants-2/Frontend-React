import React from 'react';
import { Route ,Link } from 'react-router-dom';
import PlantForm from './Plants-Form';


function Plants (props) {
    return (
        <div className='addplant'>   
        <h1>THIS IS GOING TO THE THE PLANT PAGE</h1>
        <Link to="/plants-form">
        <button>
            ADD A PLANT
        </button>
        <Route path="/plants" component={PlantForm}/>
        </Link>
        

        {/* <div className='plants'>
            {props.data.map( ( plant , id ) =>{
                return (
                    <div key = {id}>
                        <h2>{plant.name}</h2>
                        <p>{plant.nickname}</p>
                        <p>{plant.species}</p>
                        <p>{plant.h20frequency}</p>
                        </div>
                )
            })}
        </div> */}
    </div>
    )
}


export default Plants;