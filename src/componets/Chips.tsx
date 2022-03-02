import '../css/chips.css';
interface Chip{
  title:string
}
export const Chips = (props:Chip) => {
  return (
    <div className='chips color-white'>
      {props.title}
    </div>
  )
}
