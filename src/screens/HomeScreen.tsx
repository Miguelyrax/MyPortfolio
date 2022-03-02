import { CircleInfo } from "../componets/CircleInfo"
import { DownScroll } from "../componets/DownScroll"
import { NavBar } from "../ui/NavBar"
import { faGithub, faGoogle, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Malla } from '../componets/Malla';
import { Card } from "../componets/Card";
import { Button } from "../componets/Button";
import { Skill } from "../componets/Skill";
import { Navigate } from "../componets/Navigate";
import { useState } from "react";
import { Content } from '../componets/Content';


export const HomeScreen = () => {
  const [select, setSelect] = useState(0);

  const next = ()=>{
    if(select==contents.length-1){
      return;
    }
    console.log('pintado');
    setSelect(select+1);
  } 
  const back = ()=>{
    console.log('pintado');
    if(select==0){
      return;
    }
    setSelect(select-1);
  } 
  const lista:string[]=['Flutter','Dart','Node.js','Express','Javascript']
  const lista2:string[]=['React.js','TypeScript','CSS','Html']
  const lista3:string[]=['Flutter','Dart']
  const lista4:string[]=['React.js','Node.js','CSS','Html','Express']
  const lista5:string[]=['Flutter','Dart','Node.js','Express','Javascript']
  const lista6:string[]=['Flutter','Dart']
  const contents:JSX.Element[]=[ <Content
    link="https://github.com/Miguelyrax/GJoob"
    chips={lista}
    title="GJOOB"
    content="Bolsa de trabajo que busca agilizar los procesos de contratacion y capacitaciones de los empleados"
    />,
    <Content
    link="https://github.com/Miguelyrax/MyPortfolio"
    chips={lista2}
    title="My Portfolio"
    content="Portafolio personal en donde encontraras todo sobre mi"
    />,
    <Content
    link="https://github.com/Miguelyrax/Flutter_Challenge"
    chips={lista3}
    title="Puzzle Challenge"
    content="Un entretenido juego de puzzle en donde deberas encontrar el orden correcto de los números"
    />,
    <Content
    link="https://github.com/Challenge-JS/React"
    chips={lista4}
    title="Challenge React"
    content="Un crud básico para obtener el balance actual de distintos usuarios"
    />,
    <Content
    link="https://github.com/Miguelyrax/MasterJobz"
    chips={lista5}
    title="Master Jobz"
    content="Una aplicacion movil en donde los usuarios registran las tareas diarias ademas de un chat en tiempo real"
    />,
    <Content
    link="https://github.com/Miguelyrax/flutter-swiper"
    chips={lista6}
    title="Flutter Swiper"
    content="Una entretenida y facil manera de realizar un swiper en Flutter"
    />,
  ]
  return (
      <>
      <NavBar/>
      <section className="home " id="#home">
        <div className="presentation">
          <h1 className="color-red">Miguel</h1>
          <h2 className="color-white">Ingeniero + Flutter developer</h2>
          <div className="flex">
            <CircleInfo backgroundColor={"#8e8996"} color={"#040f28"} link={"https://www.linkedin.com/in/miguel-albanez-3a742411b/"} icon={faLinkedinIn}/>
            <CircleInfo backgroundColor={"#8e8996"} color={"#040f28"} link={"https://github.com/Miguelyrax"} icon={faGithub}/>
            <CircleInfo backgroundColor={"#8e8996"} color={"#040f28"} link={"qweqwe"} icon={faTwitter}/>
            <CircleInfo backgroundColor={"#8e8996"} color={"#040f28"} link={"qweqwe"} icon={faGoogle}/>
          </div>
          <DownScroll to="#about" title="About" obscure={false}/>
        </div>
      </section>
      <section className="" id="about" >
        <div className="padding-horizontal column ">
          <div className="row">
            <div className="cartas">
              <div className="index">
                <Malla color={"#d44539"}/>
              </div>
              <div className="absolute-1">
                <Card url={"https://media.istockphoto.com/photos/girl-jumping-in-the-sunset-picture-id517249689?k=20&m=517249689&s=170667a&w=0&h=3YIfofTAUqhS0b3Y6ajfhuyfBhsRcF5i6mgpx8f-TPQ="} left={false}/>
              </div>
            </div>
            <div className="about">
              <h1 className="color-red">Sobre mi</h1>
              <h2 className="color-blue lh-sm">Soy un estudiante en ingeniería en informática que se esfuerza cada día para aprender nuevas herramientas y dar la satisfacción que el cliente necesita.Soy capaz de asumir con las responsabilidades que el trabajo amerita, disfrutando cada momento en el entorno laboral para poder superarme y ser un mejor profesional.</h2>
            <Button title="Descargar CV" onPressed={()=>{}}/>
            <DownScroll title="Skills" to="#skills" obscure={true}/>  
            </div>
            
          </div>
   
        </div>
      </section>
      <section id="skills" className="pintura-right" >
        <div className="padding-horizontal column ">
          <div className="row main-alignment-bettween">
              <div className="skills">
                <h1 className="color-red">Skills</h1>
                <h2 className="color-blue lh-sm">Esta es la gama de habilidades que poseo y que sigo estudiando día a día</h2>
                <div className="wrap gap-sm center ">
                <Skill shortName="Dart" title="Dart"/>
                <Skill shortName="Flutter" title="Flutter"/>
                <Skill shortName="js" title="Javascript"/>
                <Skill shortName="React" title="React"/>
                </div>
                <div className="wrap gap-sm center">
                <Skill shortName="Ty" title="Typescript"/>
                <Skill shortName="Node" title="Node.js"/>
                <Skill shortName="Rx" title="Redux"/>
                </div>
                 <DownScroll title="Proyectos" to="#proyectos" obscure={true}/>  
              </div>
            <div className="relative cartas">
              <div className="absolute position-malla">
                <Malla color={"#040f28"}/>
              </div>
              <div className="  position-card index ">
                <Card url={"https://media.istockphoto.com/photos/girl-jumping-in-the-sunset-picture-id517249689?k=20&m=517249689&s=170667a&w=0&h=3YIfofTAUqhS0b3Y6ajfhuyfBhsRcF5i6mgpx8f-TPQ="} left={true}/>
              </div>
              
            </div>

          </div>
             
       
        </div>
      </section>
      <section className="pt-xl pintura-left " id="proyectos" >
        <div className="padding-horizontal column ">
          <div className="row ">
          
            <div className="cartas">
              <div>
                <Malla color={"#9980FA"}/>
              </div>
              <div className="absolute-1">
                <Card url={"https://media.istockphoto.com/photos/girl-jumping-in-the-sunset-picture-id517249689?k=20&m=517249689&s=170667a&w=0&h=3YIfofTAUqhS0b3Y6ajfhuyfBhsRcF5i6mgpx8f-TPQ="} left={false}/>
              </div>
            </div>
            <div className="about w-full ">
              
              {
              contents[select]
              }
              <div className="pt-md">
                <Navigate select={select} lista={contents}/>
              </div>
              <div className="row gap-sm pt-md chips-center">
                <Button title="Back" onPressed={()=>back()}/>
                <Button title="Next" onPressed={()=>next()}/>
              </div>
              <DownScroll title="Contact" to="#contact" obscure={true}/> 
            </div>
            
          </div>
          
        </div>
      </section>
      <section className="py-xl  contact-bg ">
        <div className="column ">
          <div className="contact pl-md pr-md padding-vertical  ">
              <div className="container bg-white ">
                <div className="row pl-md pr-md pb-md pt-md">
                  <h1 className="cartas color-blue center weight-500 w-full text-align-center ">Escribeme y conoceme</h1>
                  <div className="column cross-alignment-start w-full">
                    <h1 className="color-red color">Contacto</h1>
                    <input type="text" placeholder="Nombre" />
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Mensaje" />
                    <Button title="Enviar Email" onPressed={()=>{}}/>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>
      <section className="py-xl  center footer ">
        <div className="column  ">
              <h2 className="color-white text-align-center">Malbanez</h2>
              <div className="flex center">
            <CircleInfo backgroundColor={"#8e8996"} color={"#040f28"} link={"https://www.linkedin.com/in/miguel-albanez-3a742411b/"} icon={faLinkedinIn}/>
            <CircleInfo backgroundColor={"#8e8996"} color={"#040f28"} link={"https://github.com/Miguelyrax"} icon={faGithub}/>
            <CircleInfo backgroundColor={"#8e8996"} color={"#040f28"} link={"qweqwe"} icon={faTwitter}/>
            <CircleInfo backgroundColor={"#8e8996"} color={"#040f28"} link={"qweqwe"} icon={faGoogle}/>
          </div>
              <h4 className="color-white text-align-center weight-500">All Rights Reserved © 2022 Malbanez</h4>
        </div>
      </section>
      </>
  )
}
