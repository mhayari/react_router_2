import { Routes,Route } from 'react-router-dom'
import './App.css'
import { useState } from "react"
import AddMovie from './AddMovie'
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Watch from './component/Watch'



const App = () => {

  const [films, setFilms] = useState([])
  
  const [newFilms, setNewFilms] = useState({id:0, title: '', description: '', posterUrl: '', rating: '' })
  const[filterMov,setFilterMov]=useState({title:'',rating:''})
  
 

  const handelChange = (el) => {
    const id=films.length?films[films.length-1].id+1:1
    const newMov = { ...newFilms,id:id, [el.target.name]: el.target.value }
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
    setNewFilms({id:0, title: '', description: '', posterUrl: '', rating: '' })
    setFilterMov({title: '', rating: ''})

  }
  
  
  return (
    <div className='App'>
      <Navbar filterMov={filterMov} setFilterMov={setFilterMov} handelFilterChange={handelFilterChange} />
      <div className='container'>
      <Routes>
        <Route path='/' element={<Home filterMov={filterMov} setFilterMov={setFilterMov} handelFilterChange={handelFilterChange} 
         films={films}  />}/>
         <Route path='/watch' element={<Watch/>}/>
        <Route path='/addmovie' element={<AddMovie handelChange={handelChange} handelSubmit={handelSubmit}
        newFilms={newFilms} />}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </div>
    </div>
  )
}

export default App
