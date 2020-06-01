import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Profile(props){
    const [info, setInfo] = useState([])
    useEffect(() =>{
        axios 
        .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(response => {
            setInfo(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    },[])


    return(
        <div>
            <h1>Profile Page</h1>
            <img src={info.url} alt={info.title} width="360" height="360"></img>

            <p id='info'>Username: JessicaJones</p>
            <p id='info'>Phone Number: 555-555-5555</p>
            <p>Favorite Plants: Cactus</p>
        </div>
    )
}

