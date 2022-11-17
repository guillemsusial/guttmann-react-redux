import MainScreen from "./MainScreen";
import GameScreen from "./GameScreen";
import FinishScreen from "./FinishScreen";
import React, { useState } from "react";



function Simon() {
    //var state
    const [level, setLevel] = useState(0)//0,1 difficultad
    const [stateGame, setStateGame] = useState(0)//iniciar el estado del juego

    //variables de estado para el reloj
    const [intervalId,setIntervalId] = useState(0)
    const [miliSeconds, setMiliSeconds]=useState(0)

    //cambiar difficultad
    const changeDifficulty = () => {
        setLevel(level === 1 ? 0 : level + 1)
    }

    // determinar el estado del juego 0:no iniciado 1:procesando 2:Finalizado
    const ChangeStateGame = (value) => {
        setStateGame(value)      
        if(value === 1)playTimer()
    }

    //reiniciar Juego
    const restartGame= () =>{
        setStateGame(0)
        setLevel(0)
        resetTime()
    }

    //objeto con numero de card segun nivel
    const cardsBylevel ={
        0:8,
        1:16
    }

    //funciones para el timer

    const playTimer = () =>{
        if(intervalId){
            clearInterval(intervalId)
            setIntervalId(0)
        }

        const newIntervalId = setInterval (() => {
            //cada segundo se tendria que actualizar el contador 
            
            setMiliSeconds(miliSeconds => miliSeconds + 1000)
        },1000)

        setIntervalId(newIntervalId)

    }
    //detener Timer
    const resetTime = ()=>{
        setMiliSeconds(0)
        if(intervalId){
            clearInterval(intervalId)
            setIntervalId(0)
        }
    }
    

    return (
        <React.Fragment >
          
                {stateGame === 0 ?
                    <MainScreen
                        level={level}
                        changeDifficulty={changeDifficulty}
                        setStart={ChangeStateGame}
                    /> : stateGame === 1 ?
                    <div className="container ">
                        <GameScreen
                            numCard ={cardsBylevel[level]}
                            time ={miliSeconds}
                            setReset={restartGame}
                            setFinish ={ChangeStateGame} 
                        /> 
                     </div>: <FinishScreen  setReset={restartGame}/>
                } 


              
           
        </React.Fragment>


    );
}
export default Simon