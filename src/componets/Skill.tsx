import '../css/skill.css';
interface Skill{
    title:string,
    shortName:string
}
export const Skill = (props:Skill) => {
  return (
    <div className='column center'>
        <div className='circular-skill center'>{props.shortName}</div>
        <div>{props.title}</div>
    </div>
  )
}
