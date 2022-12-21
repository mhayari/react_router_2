import PropTypes from 'prop-types'
import MovieCard from '../MovieCard'
import { useSelector } from 'react-redux'
import { useState } from "react"
import { updated } from '../redux/reducer'
import { useDispatch } from 'react-redux'

const Home = () => {
  const Dispatch=useDispatch()
  const list=useSelector(state=>state.MovieRedux.list)
  const [isEdit,setIsEdit]=useState(false)
  
  const [id,setId]=useState(null)
  const [update,setUpdate]=useState({id:0,title: '', description: '', posterUrl: '', rating: '' })

  return (
          <div className='movieList' >
      {list.map((film,i) => (
        <>
      
          <div key={film.id}> 
                  <MovieCard  film={film} i={i}   />
                  <button onClick={()=>{setIsEdit(true) 
                    setId(film.id)
                    setUpdate({...update,id:film.id})}}
                    >Update</button>
            {isEdit && id===film.id&&(
              <>
              <input  placeholder="Title" type='text' name='title' defaultValue={update.title} onChange={(e)=>setUpdate({ ...update, [e.target.name]: e.target.value })} /><br />
            <input  placeholder="description" type='text' name='description' defaultValue={update.description} onChange={(e)=>setUpdate({ ...update, [e.target.name]: e.target.value })} /><br />
            <input  placeholder="Url" type='text' name='posterUrl' defaultValue={update.posterUrl} onChange={(e)=>setUpdate({ ...update, [e.target.name]: e.target.value })} /><br />
            <input placeholder="rating" type='text' name='rating' defaultValue={update.rating}  onChange={(e)=>setUpdate({ ...update, [e.target.name]: e.target.value })} /><br />
            <button onClick={()=>{Dispatch(updated(update))
            setUpdate({id:0,title: '', description: '', posterUrl: '', rating: '' })
            setIsEdit(false)}}>edit</button>
              
              </>
              )}
                  </div>
              </>
              ))}
              </div>
  )
}

Home.propTypes={
  film:PropTypes.shape({
    rating:PropTypes.number
  })
  }
export default Home
