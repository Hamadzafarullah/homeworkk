import React, { useState } from "react";


const RandomDawgs = ({setRandomDawgBreed, getRandomDawg, randomDawg}) => {
    
    const [randomBreedInput, setRandomBreedInput] = useState('')
         
    const handleChange = (e) => {
        setRandomBreedInput(e.target.value)
        }
   
        const handleSubmit = () => {
        setRandomDawgBreed(randomBreedInput)
         getRandomDawg()
        }
    
     return(
        <div>
         
          <h1>Pictures</h1>  
          <h1>Click to see some Dawgs!</h1>
       
        <div>
          
          <input type='text' placeholder="enter dawg breed" onChange={handleChange}></input>
          <button onClick={handleSubmit}>random pic</button>
       
       </div>
          
           {randomDawg && <img src={randomDawg}></img>}
       
        </div>
        )
    }
    
    export default RandomDawgs