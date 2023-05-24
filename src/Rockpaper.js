import { useEffect, useState, useLayoutEffect } from "react"
const computerChoice  = Math.floor(Math.random()*3) 
const userChoice = Math.floor(Math.random()*3) 

const RockPaper = () => {
    // const[game,setGame] = useState('')
    // const[computerScore, setComputerScore] = useState(0)
    // const [userScore ,setUserScore] = useState(0)
    const [score,setScore] = useState({
        userScore :0,
        computerScore:0

    })

    
    const Winninglogic  = () =>{
        const result = computerChoice.toString() + userChoice.toString()
        const upoints  = score.userScore + 1 
        const cpoints = score.computerScore + 1 
        console.log(result) 
        setScore(/(^[1]{2}$)|(^[0]{2}$)|(^[2]{2}$)/.test(result) ? upoints(0) : /^02$|^10$|^21$/.test(result) ? setScore(score.computerScore(cpoints)) : setScore(score.userScore(upoints)) )
    

    }
    
    
    useEffect(()=>{
    
        
        Winninglogic()
        
        

    },[computerChoice,userChoice])
    
    // const result = computerChoice.toString() + userChoice.toString()
    // console.log(result) 
   
    // console.log(/(^[1]{2}$)|(^[0]{2}$)|(^[2]{2}$)/.test(result) ? "Draw"  : /^02$|^10$|^21$/.test(result) ?  setComputerScore(cpoints)  : setUserScore(upoints) )

    return(
        <div>

            <h1>Rock paper sissor</h1> 
            <h1> Computer  : <span>{computerChoice}</span></h1> 
            <h1> User  : <span>{userChoice}</span></h1>
            <h2>userPoints : {score.userScore}</h2> 
            <h2>computerPoints : {score.computerScore}</h2>


            
        </div>
    )
}
export default RockPaper