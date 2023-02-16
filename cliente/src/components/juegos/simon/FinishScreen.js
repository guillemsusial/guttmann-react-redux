import Button from "../../elements/Button";


export default function FinishScreen(props){
    return(
      <div className="text-center">
        <h1>You Win</h1>
        <br/>
        <Button  label="Restart game" action={props.setReset}/>
      </div>
  
  
    );
  }