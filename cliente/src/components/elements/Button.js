export default function Button(props){
    return(
      <button className={`button ${props.className}`}  onClick={props.action}>{props.label}</button>
  
  
    );
  }