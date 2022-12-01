import FilterMovie from "../FilterMovie"
import PropTypes from 'prop-types'
import MovieList from "../MovieList"
import Navbar from "./Navbar"
import { NavLink } from "react-router-dom"
const Home = ({filterMov,setFilterMov,handelFilterChange,films,handelWatchClick}) => {
  return (
    <>
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
