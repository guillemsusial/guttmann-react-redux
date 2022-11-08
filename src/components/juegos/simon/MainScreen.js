import Button from "./Button";


export default function MainScreen(props){
  const levelText =['Trial','Game']

  return(
    <div className="mainscreen text-center">
      <h1 className="mainscreen-title">Memory Game</h1>
      <div className="mainscreen-menu  ">
        <p>Select level</p>
        <Button label={levelText[props.level]}  action={props.changeDifficulty}/>
        <Button label="Start"  action={()=> props.setStart(1)}/>
      </div>
     
    </div>


  );
}