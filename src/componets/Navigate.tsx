import '../css/navigate.css'
interface Select{
    select:number,
    lista:JSX.Element[]
}
export const Navigate = (props:Select) => {
  return (
    <div className='column'>
        0{props.select+1}
        <div className='row gap-sm'>
          {
            props.lista.map((_,index)=>(
              <div key={index} className={`content ${props.select==index?"bg-blue":"bg-gray"}`} >

              </div>
            ))
          }
        </div>
    </div>
  )
}
