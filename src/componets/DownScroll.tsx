import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/downscroll.css';
import { Title } from './Title';

interface Scroll{
  title:string,
  to:string,
  obscure:boolean
}
export const DownScroll = (props:Scroll) => {
  return (
    <a href={props.to}>
      <div className="flex downscroll pointer">
      <div className={`circular center ${props.obscure?"b2":"b1"}`}>
        <FontAwesomeIcon className={`${props.obscure?"color-blue":"color.white"}`} size='sm' icon={faArrowDown} />
      </div>
      <h6 className={`${props.obscure?"color-blue":"color.white"}`} >{props.title}</h6>
      </div>
    </a>
    
  )
}
