import React from "react";



const NavBar = ({setView}) => {
    return(
      
      <div>
        
         <h1> Wanna see some Dawgs?!</h1>
       
        <div>
            
             <button className="all" onClick={() => {setView('Back')}}>Back</button>
               
                <button className="all" onClick={() => {setView('random dawgs')}}>random Dawgs</button>
           
            </div>
        
        </div>
    )
}
export default NavBar