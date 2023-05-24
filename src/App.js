// import logo from './logo.svg';

import './App.css';
import { useState } from 'react';
import RockPaper from './Rockpaper';
import Game from './Componnets/Game.js';
function App() {
// const [userChoice,setUserChoice] = useState("rock")
// const [computerChoice,setComputerChoice] = useState('rock')
// const [userScore,setUserScore] = useState(0)
// const[computerScore,setComputerScore] = useState(0) 
// const[turnResult,setTurnResult] = useState(null) 
// const[gameOver,setGameOver] = useState(false)
// const[result,setResult] = useState('Let\' s who win ')
// const choices = ['rock' ,'paper','scissors']

// const handleonClick =(choice) =>{
//   setUserChoice(choice) 
//   generateComputerChoice()

  
// }
// const generateComputerChoice =() =>{
  // const randomChoice = choices[Math.floor(Math.random () * choices.length)]
  // setComputerChoice(randomChoice)



  return (
    <div className="App">
      <Game />
    
    </div>
  );
}

export default App;
