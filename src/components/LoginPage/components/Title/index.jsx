// styles
import "./index.scss"

export function Title(props) {
  return(
    <>
    <h1 className="title" style={{fontSize:`${props.font}`}}>{props.title}</h1>
    <p className="subtitle">{props.children}</p>
    </>
    );
}
