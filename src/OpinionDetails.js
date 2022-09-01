import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
const OpinionDetails = () => {

    const {id} = useParams();
    const {data:opinion,error, isPending} = useFetch('http://localhost:8000/opinions/'+id);
    const history = useHistory();
    const handleClick = () =>{
      fetch('http://localhost:8000/opinions/'+opinion.id,{
        method : 'DELETE'

      }).then(() => {
            history.push('/');
      })
    }
    return ( 
      <div className="opinion-details">
        {/* {isPending && <div>Loading...</div>} */}
        {/* {error && <div>{error}</div>} */}
        {opinion && (
            <article>
                <h2>{ opinion.title}</h2>
                <p>Written By { opinion.author}</p>
                <div>{ opinion.body}</div>
                <button onClick={handleClick}>Delete Opinion</button>
            </article>
        )}
      </div>  
     );
}
 
export default OpinionDetails;