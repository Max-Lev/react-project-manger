export default function Project(props) {
  return<>
    <div className="project">
      <h3>{props.name}</h3>
      <a>{props.date} </a>
      <p>{props.description}</p>
      
    </div>
  </>
}