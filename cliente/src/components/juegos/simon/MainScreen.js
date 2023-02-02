import Button from "../../elements/Button";
import Card from 'react-bootstrap/Card';
import { BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill } from "react-icons/bs";

export default function MainScreen(props) {
 // const levelText = ["Trial", "Game"];
 

  const levelText =[{
    name: "Trial",
    text: `En este modo podrás probar el juego para 
    aprender sus mecanicas.`
  },
  {
    name: "Game",
    text: `En este modo de juego te pondras a prueba , hasta 
    donde llegarás?`
  }
]


  return (
    <div className="mainscreen text-center">      
      <div className="mainscreen-card">
        <div className="mainscreen-selectLevel">
          <h1 className="mainscreen-title col-lg-6 col-sm-12 ">Memory Game</h1>
          <Card className="col-lg-6 col-sm-12 ">
          <Card.Title>{levelText[props.level].name}</Card.Title>
            <Card.Body>
              <Button className="arrow" label={<BsFillArrowLeftCircleFill/>} action={props.changeDifficulty}/>
              <div>
                
                <Card.Text>
                {levelText[props.level].text}
                </Card.Text>
              </div>
              <Button className="arrow" label={<BsFillArrowRightCircleFill/> } action={props.changeDifficulty}/>
            </Card.Body>
        </Card>
        </div>
        <div className="mainscreen-startGame col-12">        
          <Card>      
            <Card.Body>
            <Button label="Start" className="button-start"  action={()=> props.setStart(1)}/>
            </Card.Body>
        </Card>
        </div>
      </div>
      
      {/* <div className="mainscreen-menu  ">
          <p>Select level</p>
          <Button label={levelText[props.level]}  action={props.changeDifficulty}/>
          <Button label="Start"  action={()=> props.setStart(1)}/>
        </div> */}
    </div>
  );
}
