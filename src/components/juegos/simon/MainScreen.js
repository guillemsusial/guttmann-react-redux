import Button from "./Button";
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
      <h1 className="mainscreen-title">Memory Game</h1>
      <div className="mainscreen-selectLevel">
        <h1 className="mainscreen-title">Memory Game</h1>
        <Card>
        <Card.Title>{levelText[props.level].name}</Card.Title>
          <Card.Body>
            <Button className="left-arrow" label={<BsFillArrowLeftCircleFill/>} action={props.changeDifficulty}/>
            <div>
              
              <Card.Text>
              {levelText[props.level].text}
              </Card.Text>
            </div>
            <Button className="left-arrow" label={<BsFillArrowRightCircleFill/> } action={props.changeDifficulty}/>
          </Card.Body>
      </Card>
      </div>

      
      {/* <div className="mainscreen-menu  ">
          <p>Select level</p>
          <Button label={levelText[props.level]}  action={props.changeDifficulty}/>
          <Button label="Start"  action={()=> props.setStart(1)}/>
        </div> */}
    </div>
  );
}
