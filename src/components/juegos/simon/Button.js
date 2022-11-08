export default function Button(props){
    return(
      <button className="button" onClick={props.action}>{props.label}</button>
  
  
    );
  }