import { useEffect } from "react";
import { useState } from "react";
import Button from "../../elements/Button";
import Card from "./Card";
import arrCardRand from "./logic/CreateArrCardRand";
import arrCardSequence from "./logic/sequence";
import converTimer from "./logic/convertTimer";

//Generamos un array de cards de 4 x 4 

export default function GameScreen(props){
  //variables de estado
  const[cardsArr,setCardArr]=useState([]);
  const [moves,setMoves] = useState(0);
  const[sequence,setSequence] =useState([]);
  
  //Llamar a funcion generar array cards aleatorio
  useEffect(()=>{
    setCardArr(arrCardRand([props.numCard]))  
    setSequence(arrCardSequence([props.numCard],3));
    
  },[props.numCard])
  
  
  

  //Rotate Function
  const rotate = (id,set)=>{
    if(set === 0){
      setCardArr(prevArr =>{
        prevArr[id].rotate=true
        prevArr[id].validating=1//indicar que este elemento esta siendo evaluado
        //console.log(...prevArr)
        return[...prevArr]
      })
    }
    setTimeout(() => validate(),500)
  }

 

  useEffect(()=>{
    try{
      setSequence((elements)=>{
        let times=0        
        for(var i = 0; i <  elements[0]['sequence'].length; i++){ 
            
          setTimeout(function(){        
              
              // console.log(times)    
              // console.log(elements[0]['sequence'][times]);
              setCardArr(prevArr =>{            
                prevArr[elements[0]['sequence'][times]].rotate=true           
                console.log(...prevArr)
                times++
                return[...prevArr]
            })   
            
          },i * 1000)
        }
        
        
      
      })
      
    }catch(error){
      console.log("undefined")
    }
    // setSequence(elements => {
    //   try{
    //     let element=elements[0]['sequence']
    //     //console.log(element.length)         
    //       for( let i=0;i<element.length;i++){
    //         console.log(elements[0]['sequence'])
                        
    //       }       
      
    //   }catch(error){
    //     console.log("undefined")
    //   }
    // })
  },[])   

/*
  const showSequence=()=>{
    sequence.forEach(element => {
      console.log(element)
      setTimeout(() => {
        setCardArr(prevArr =>{
          prevArr[element].rotate=true     
          return[...prevArr]
        })
      }, "2000")
    });   
  }*/
 
 
  //validar ->correcto-> useeffect cambie la variable sequence + 1
  //validate function
  const validate = () =>{  
   
    setMoves(moves + 1)
    const validatingCards = cardsArr.filter(card => card.validating === 1)
    if(validatingCards[0].bind===1 && validatingCards[1].bind===2 ){
      window.alert("hola")
    }
    
    /*if(validatingCards.length===2){
      if(validatingCards[0].bind !== validatingCards[1].bind){

        //la validacion no coincide
        setCardArr(prevArr =>{
          prevArr[validatingCards[0].id].rotate=false
          prevArr[validatingCards[0].id].validating=0
          prevArr[validatingCards[1].id].rotate=false
          prevArr[validatingCards[1].id].validating=0
          return[...prevArr]
        })
       
      }else{

        //validacion coincide
        setCardArr(prevArr =>{
          prevArr[validatingCards[0].id].set=1
          prevArr[validatingCards[0].id].validating=0
          prevArr[validatingCards[1].id].set=1
          prevArr[validatingCards[1].id].validating=0
          return[...prevArr]
        })
      }
     
    }*/
    // Verificar que no hay espacios verificandose
    const setCards = cardsArr.filter(card => card.set === 0).length
    
    if(setCards === 0){
      //llamar a una funcion para mostrar pantalla FINAL
      props.setFinish(2)
    }
  }

  return(
    <div className="gamescreen">
      
      <div className="gamescreen--score grid grid-2">
        <div className="gamscreen--moves">
          <p>Moves {moves}</p>
        </div>
        <div className="gamscreen--time text-end">
          <p>Time {converTimer(props.time) }</p>
        </div>
      </div>
      <div className="gamescreen--score grid grid-4">

      {/* {Array.from({ length: 16 }).map((_, idx) => (
        <Card key={idx} validating={0} symbol={idx} />
      ))} */}
      {
        cardsArr
          .sort((a,b)=> (a.id - b.id))
          .map(card=>{
            return <Card
              key={card.id}
              id={card.id}
              rotate={card.rotate}
              symbol={card.symbol}
              bind={card.bind}
              set={card.set}   
              actionRotate={rotate}        
             
            />
          })
          
      }
       
      </div>
      <div className="text-center">
        <Button label="Restart game" action={props.setReset}/>
      </div>
    </div>


  );
}