import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { Chips } from "./Chips"
import { CircleInfo } from "./CircleInfo"
interface Content{
  title:string,
  content:string,
  chips:string[],
  link:string
}
export const Content = (props:Content) => {
  return (
    <>
    <h1 className="color-red">Portafolio</h1>
    <h2 className="color-red weight-500">{props.title}</h2>
    <h2 className="color-blue lh-sm">{props.content}</h2>
  
    <div className="wrap gap-sm chips-center">
      {
        props.chips.map((chip)=>(
          <Chips key={chip} title={chip}/>
        ))
      }

    </div>
    <div className="pt-md pointer">
      <CircleInfo backgroundColor={"#8e8996"} color={"#fbfbfb"} link={props.link} icon={faGithub}/>
    </div>
    </> 
  )
}
