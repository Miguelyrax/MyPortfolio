import '../css/card.css';
interface Card{
  url:string,
  left:boolean,
  width?: string;
  height?: string;
}
export const Card = (props:Card) => {
  if(props.width==undefined){
    
  }
  if(props.width==undefined){
    
  }
  return (
    <div style={{
      backgroundImage:props.url,
      width:props.width==undefined?'450px':props.width,
      height:props.height==undefined?'600px':props.height}} className={`${props.left?"card-left":"card"}`}>
      <img src={props.url}/>
    </div>
  )
}
