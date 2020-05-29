import React, { useState, useEffect } from "react"
import axiosWithAuth from "../util/axiosWithAuth"


function PlantsList() {

    const [plants, setPlants] = useState([])
    
    console.log(plants)

    useEffect(() => {
        axiosWithAuth()
        .get("/api/:id/plants")
        .then((res) => {
            console.log(res)
            setPlants(res.data)
        })
        .catch((err) => console.log("ERROR", err))
    }, [])

    const deleteHandler = (id) => {
        axiosWithAuth()
        .delete(`/api/${id}/plants/${id}`)
        .then((res => setPlants(res.data)))
        .catch((err) => console.log("ERROR", err))
    }

    return (
        <div>
            {plants.map((x) => {
                return (
                    <div key={x.id}>
                        <h3>Name: {x.nickname}</h3>
                        <h3>Species: {x.species}</h3>
                        <h3>h2o_frequency: {x.h2o_frequency}</h3>
                        <button onClick={()=> deleteHandler(x.id)}> 
                            Remove Plant</button>
                    </div>
                )
            })}


        </div>

    )
}

export default PlantsList;