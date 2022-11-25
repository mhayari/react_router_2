import './App.css'
import { useState } from "react"
import MovieList from './MovieList'
import AddMovie from './AddMovie'
import FilterMovie from './FilterMovie'

const App = () => {

  const [films, setFilms] = useState([{title: 'one', description: 'new', posterUrl: '/images/1.jpeg', rating: '1'}])
  
  const [newFilms, setNewFilms] = useState({ title: '', description: '', posterUrl: '', rating: '' })
  const[filterMov,setFilterMov]=useState({title:'',rating:''})

  const handelChange = (el) => {
    const newMov = { ...newFilms, [el.target.name]: el.target.value }
    setNewFilms(newMov)
  }

  const handelFilterChange = (e) => {
    const newFilter = { ...filterMov, [e.target.name]: e.target.value }
    setFilterMov(newFilter)
  }
  const addMov=()=>{
    const listMov = [...films,newFilms]
    setFilms(listMov)
  }
  
  
  const handelSubmit = () => {
    addMov()
    setNewFilms({ title: '', description: '', posterUrl: '', rating: '' })
    setFilterMov({title: '', rating: ''})

  }
  
  
  return (
    <div className='App'>
      <FilterMovie filterMov={filterMov} setFilterMov={setFilterMov} handelFilterChange={handelFilterChange}   />
      <AddMovie handelChange={handelChange} handelSubmit={handelSubmit}
        newFilms={newFilms} />
      <MovieList films={films.filter(film=>((film.title).toLowerCase()).includes((filterMov.title).toLowerCase())&&(film.rating.includes(filterMov.rating)))}/>
    </div>
  )
}

export default App
