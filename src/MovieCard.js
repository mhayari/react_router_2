import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { deleteItem} from "./redux/reducer"



const MovieCard = ({film,i}) => {
   
   const Dispatch=useDispatch()
    return (
        <div className='movieCard' >
        <h3>{film.title}</h3>
                    <p>{film.description}</p>
                    <p className='p-image'><img src={film.posterUrl} alt={`pic ${i}`} /></p>
            <p>{film.rating}</p>
            <Link  to='watch' state={film}><button  >Watch Now </button></Link>
            <button onClick={()=>Dispatch(deleteItem(film.id))}>Delete</button>
            
            </div>
    )
}

export default MovieCard
