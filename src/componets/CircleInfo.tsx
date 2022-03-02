import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/circleinfo.css';

interface Circle{
  link:string,
  icon:IconProp,
  backgroundColor:string,
  color:string,
}

export const CircleInfo = (props:Circle) => {
  return (
    <div style={{ backgroundColor:props.backgroundColor}} className="circle center pointer">
      <a href={props.link}>
        <FontAwesomeIcon style={{color:props.color}} icon={props.icon} />
      </a>
    </div>
  )
}
