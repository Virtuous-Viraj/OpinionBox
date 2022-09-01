import {useState} from 'react';
import {useHistory} from 'react-router-dom';
const Create = () => {

   const [title,setTitle] = useState('');
   const [body,setBody] = useState('');
   const [author,setAuthor] = useState('');
   const history = useHistory();

   const handlesubmit = (e) =>{
      e.preventDefault();
      const opinion = {title, body, author};
      fetch('http://localhost:8000/opinions', {
         method :'POST',
         headers: {"Content-Type":"application/json"},
         body: JSON.stringify(opinion)
      }).then(() =>
      {
         // history.go(-1);
         history.push('/');
      })
      
   }

    return ( 
        <div className="create">
           <h2>Add an Opinion</h2>
           <form onSubmit={handlesubmit}>
            <label>Title:</label>
            <input
            required
            value = {title}
            onChange = {(e) =>setTitle(e.target.value)}
            />
            <label>What's on your mind?</label>
            <textarea required
            value = {body}
            onChange = {(e) => setBody(e.target.value)}
            ></textarea>
            <label>Opinion By:</label>
            {/* <select>
               value: {author}
               onChange = {(e) => setAuthor(e.target.value)}
               <option value="xyz">XYZ</option>
               <option value="abc">ABC</option>
            </select> */}
            <input
            required
            value = {author}
            onChange = {(e) =>setAuthor(e.target.value)}
            />
            <button>Add Opinion</button>
            <p><h3>{title}</h3></p>
            <p>{body}</p>
            <p><h3>{author}</h3></p>
           </form> 
        </div>
     );
}
 
export default Create;