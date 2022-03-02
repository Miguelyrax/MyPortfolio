import { faBars, faBullseye, faBurger, faHamburger, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NavBar = () => {
  return (
    <nav className="nav">
      <div className="burguer pointer">
      <FontAwesomeIcon style={{color:'white'}} icon={faBars} size={'2x'}/>
      </div>
        <div className="titulo cartas">
            <h2 className="color-red pointer">Home</h2>
        </div>
        <ul className="cartas">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#proyectos">Works</a>
            <a href="#skills">Contact</a>
        </ul>
    </nav>
  )
}
