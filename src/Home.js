import OpinionList from "./OpinionList";
import useFetch from "./useFetch";
const Home = () => {
    //   const handleDelete = (id) =>{
    //     const newOpionion = opinions.filter(opinon => opinon.id !== id);
    //     setOpinions(newOpionion);
    // }
    const {error,isPending,data:opinions} = useFetch('http://localhost:8000/opinions');
    return ( 
        <div className="home">
            {error && <div> {error} </div>}

           {opinions &&  <OpinionList opinions={opinions} title = "All Opinions!"/>}
           
           {/* <OpinioList opinions={opinions.filter((opinion)=> opinion.author==='mario' )} title = "Mar's Opinion!"/> */}
            {/* <button type="" onClick={() => handleDelete(opinion.id)}>Delete Opinion</button> */}
        </div>
     );
}
 
export default Home;