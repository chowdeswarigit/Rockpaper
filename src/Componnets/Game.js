import { useEffect, useState } from 'react'
// import './App.css'


const Game = () => {
  const [userChoice, setUserChoice] = useState('rock')
  const [computerChoice, setComputerChoice] = useState('rock')
  const [userPoints, setUserPoints] = useState(0)
  const [computerPoints, setComputerPoints] = useState(0)
  const [turnResult, setTurnResult] = useState(null)
  const [result, setResult] = useState('')
  const [gameOver, setGameOver] = useState(false)
  const choices = ['rock', 'paper', 'scissors']

console.log(gameOver)

  const handleClick = (value) => {
    setUserChoice(value)    
    generateComputerChoice()
  }
  console.log(userChoice)
  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    setComputerChoice(randomChoice)
  }
  const reset = () => {
    window.location.reload()
  }
  useEffect(() => {
    const comboMoves = userChoice + computerChoice
    if (userPoints <= 4 && computerPoints <= 4) {
      if (comboMoves === 'scissorspaper' || comboMoves === 'rockscissors' || comboMoves === 'paperrock') {
        // userPoints.current += 1
        const updatedUserPoints = userPoints + 1
        setUserPoints(updatedUserPoints)
        setTurnResult('User gets the point!')
        if (updatedUserPoints === 5){
          setResult('User Wins')
          setGameOver(true)
        }
      }

      if (comboMoves === 'paperscissors' || comboMoves === 'scissorsrock' || comboMoves === 'rockpaper') {
        // computerPoints.current += 1
        const updatedComputerPoints = computerPoints + 1
        setComputerPoints(updatedComputerPoints)
        setTurnResult('Computer gets the point!')
        if (updatedComputerPoints === 5) {
          setResult('Computer Wins')
          const gameOff = true
          setGameOver(true)
        }
      }

      if (comboMoves === 'paperpaper' || comboMoves === 'rockrock' || comboMoves === 'scissorsscissors') {
        setTurnResult('No one gets a point!')
      }
    }
  }, [computerChoice, userChoice])

  return (
    <div className="App">
      <h1 className='heading'>Rock-Paper-Scissors</h1>
      <div className='score'>
        <h1>User Points: {userPoints}</h1>
        <h1>Computer Points: {computerPoints}</h1>
      </div>

      <div className='choice'>
        <div className='choice-user'>
            <h5>User Choice</h5>
          <img className='user-hand' src={`../images/${userChoice}.png`} alt=''></img>
        </div>
        <div className='choice-computer'>
        <h5>Computer Choice</h5>

          <img className='computer-hand' src={`../images/${computerChoice}.png`} alt=''></img>
        </div>
      </div>
      
      <div className='button-div'>
        {choices.map((choice, index) =>
        
          <button   onClick={() => handleClick(choice)} className='button' key={index} disabled = {gameOver}>
            <img style={{width:"80px"}} src={`../images/${choice}.png`}  />
          </button>
          
        )}
      </div>
      
      <div className='result'>
        <h1>Turn Result: {turnResult}</h1>
        <h1>Final Result: {result}</h1>
      </div>
      
      <div className='button-div'>
        {gameOver && 
          <button className='button' style={{backgroundColor:"yellow"}} onClick={() => reset()}>Restart Game?</button>
        }
      </div>
    </div>
  )
}

export default Game 
