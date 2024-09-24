import { IJumbotron} from "./types";
import "./style.css"

function JumbotronSection(props : IJumbotron){
    return(
        <div className="container">
            <h2>Ini dari Jumbotron Section</h2>
            <p>Hello {props.name}</p>
        </div>
    )
}

export default JumbotronSection;