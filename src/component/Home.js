import FilterMovie from "../FilterMovie"
import PropTypes from 'prop-types'
import MovieList from "../MovieList"
import Navbar from "./Navbar"
import { NavLink } from "react-router-dom"
const Home = ({filterMov,setFilterMov,handelFilterChange,films,handelWatchClick}) => {
  return (
    <>
     {/* <div className="home">
      <NavLink to='/'>Home</NavLink>
      <NavLink to='add movies'>Add Movies</NavLink>
      <NavLink to='about'>About</NavLink>
      <NavLink to='contact'>Contact</NavLink>
    </div> */}
    {/* <div>
    <input placeholder='Filter Title' type='search' name='title'  onChange={handelFilterChange} value={filterMov.title}  />
            <input placeholder='Filter Rating' type='search' name='rating' onChange={handelFilterChange} value={filterMov.rating} />
    </div> */}


      <MovieList  handelWatchClick={handelWatchClick} films={films.filter(film=>((film.title).toLowerCase()).includes((filterMov.title).toLowerCase())&&(film.rating>=Number(filterMov.rating)))}/>
      
      </>
  )
}

Home.propTypes={
  film:PropTypes.shape({
    rating:PropTypes.number
  })
  }
export default Home
