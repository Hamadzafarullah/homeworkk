import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from "axios";
import React from "react";
import DawgList from './Components/DawgsList.js';
import RandomDawgs from './Components/RandomDawgs.js';
import NavBar from './NavBar.js';

const URL =`https://dog.ceo/api/breeds/list/all`;
function App(props) {
const [currrentView, setCurrentView] = useState()
const [post, setDawg] = useState("");
const [randomDawg, setRandomDawg] = useState() 
const [randomDawgBreed, setRandomDawgBreed] = useState()   
const setView = str => {
 setCurrentView(str)
  }
const getDawgs= (() => {
  axios.get(URL)
   .then(res => (Object.entries(res.data.message)))
   .then(res => setDawg(res))
    });
useEffect(() => {
 getRandomDawg()
 }, [randomDawgBreed])

const getRandomDawg = () => {
  randomDawgBreed &&
  axios.get(`https://dog.ceo/api/breed/${randomDawgBreed}/images/random`)
   .then(res => setRandomDawg(res.data.message))
   .catch(err => alert('invalid breed try again'))
    }
 return (
    <div>
    <NavBar setView={setView}/>
    {currrentView === 'random dawgs' ? <RandomDawgs randomDawgBreed = {randomDawgBreed} randomDawg = {randomDawg} getRandomDawg = {getRandomDawg} setRandomDawgBreed = {setRandomDawgBreed}/> :  <DawgList post={post} getDawgs={getDawgs}/>}
    </div>
  );
}; 

export default App;

