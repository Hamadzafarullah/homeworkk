import React from 'react'
import { useState, useEffect } from 'react';
import axios from "axios";

const URL =`https://dog.ceo/api/breeds/list/all`;
function DawgList ({post, getDawgs}){
  return (
    <div>
     <h3 className='listfordog'>Click to see some DAWGS! </h3>
     <button className='all' onClick={getDawgs}>Get List Of dawgs</button>
     <ul>
         {post && post.map((breedFamily, key) => {
             return (
             <ul key={key}>
               <h3>{breedFamily[0]}</h3>
               {breedFamily[1].length > 0 && breedFamily[1].map((breed, key) => {
                return <p key={key}>-{breed}</p>
                 }) }
            </ul>
             )
             })}
    </ul>
        </div>
    );
};
export default DawgList