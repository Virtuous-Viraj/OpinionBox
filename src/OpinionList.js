
import { Link } from "react-router-dom";
const OpinionList = ({opinions, title}) => {
    // const opinions = props.opinion;
    // const title = props.title;
    // console.log(props,opinions);
    return ( 
        <div className="opinion-list">
            <h2>{title}</h2>
            {opinions.map((opinion)=>(
            <div className="opinion-preview" key={opinion.id}>
                <Link to={`/opinions/${opinion.id}`}>
                <h2>{opinion.title}</h2>
                <p>Written by: {opinion.author}</p>
                </Link>
                
                {/* <button type="" onClick={()=> handleDelete(opinion.id)}>Delete Opinion</button> */}
            </div>
           ))} 
        </div>
     );
}
 
export default OpinionList;