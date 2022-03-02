import '../css/card.css';
interface Card{
  url:string,
  left:boolean
}
export const Card = (props:Card) => {
  return (
    <div className={`${props.left?"card-left":"card"}`}>
      <img src={props.url}/>
    </div>
  )
}
