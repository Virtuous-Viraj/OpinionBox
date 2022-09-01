import {Link} from 'react-router-dom';
const Notfound = () => {
    return ( 
        <div className="Notfound">
            <h1>Sorry</h1>
            <p>Page cannot be found</p>
            <Link to="/">Back To Home</Link>
        </div>
     );
}
 
export default Notfound;