
interface Point{
  color:string
}
export const PointMalla = (props:Point) => {
  return (
    <div className="row color-red point">
        <li style={{color:props.color}}>•</li>
        <li style={{color:props.color}}>•</li>
        <li style={{color:props.color}}>•</li>
        <li style={{color:props.color}}>•</li>
        <li style={{color:props.color}}>•</li>
        <li style={{color:props.color}}>•</li>
        <li style={{color:props.color}}>•</li>
        <li style={{color:props.color}}>•</li>
        <li style={{color:props.color}}>•</li>
        <li style={{color:props.color}}>•</li>
        <li style={{color:props.color}}>•</li>
        <li style={{color:props.color}}>•</li>
   </div>
  )
}
