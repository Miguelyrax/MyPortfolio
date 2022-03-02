import '../css/button.css'
interface Button{
  title:string,
  onPressed():any
}
export const Button = (props:Button) => {
  return (
    <button onClick={props.onPressed} className='button pointer bg-blue color-white'>{props.title}</button>
  )
}
