import { PointMalla } from './PointMalla';
import '../css/malla.css';
interface Malla{
  color:string
}
export const Malla = (props:Malla) => {
  return (
    <div className="column">
      <PointMalla color={props.color}/>
      <PointMalla color={props.color}/>
      <PointMalla color={props.color}/>
      <PointMalla color={props.color}/>
      <PointMalla color={props.color}/>
      <PointMalla color={props.color}/>
      <PointMalla color={props.color}/>
      <PointMalla color={props.color}/>
      <PointMalla color={props.color}/>
      <PointMalla color={props.color}/>
      <PointMalla color={props.color}/>
      <PointMalla color={props.color}/>
      <PointMalla color={props.color}/>
    </div>
  )
}
