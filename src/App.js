import { Routes,Route } from 'react-router-dom'
import './App.css'
import { useState } from "react"
import AddMovie from './AddMovie'
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Watch from './component/Watch'
import { BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { filterFilm } from './redux/reducer'
import {add} from './redux/reducer'
import { useSelector } from 'react-redux'
import axios from 'axios'



const App = () => {
  const id=useSelector(state=>state.MovieRedux.list.id)


  const Dispatch=useDispatch()
  
  const [newFilms, setNewFilms] = useState({id:0,title: '', description: '', posterUrl: '', rating: '' })
  const[filterMov,setFilterMov]=useState({title:'',rating:''})

  const handelChange = (el) => {
    const newMov = { ...newFilms,id:id,[el.target.name]: el.target.value }
    setNewFilms(newMov)
  }

  const handelFilterChange = (e) => {
    const newFilter = { ...filterMov, [e.target.name]: e.target.value }
    // setFilterMov(newFilter)
    
    Dispatch(filterFilm(newFilter))
  }
 
  
  
  const handelSubmit = () => {
    if(!newFilms)return
      Dispatch(add(newFilms))
      console.log(newFilms.id)
      setNewFilms({id:0, title: '', description: '', posterUrl: '', rating: '' })
      setFilterMov({title: '', rating: ''})
    
    }


  
  
  return (
    <BrowserRouter>

    <div className='App'>
      <Navbar filterMov={filterMov} setFilterMov={setFilterMov} handelFilterChange={handelFilterChange}  />
      <div className='container'>
      <Routes>
        <Route path='/' element={<Home  />}/>
         <Route path='/watch' element={<Watch/>}/>
        <Route path='/addmovie' element={<AddMovie handelChange={handelChange} handelSubmit={handelSubmit}
        newFilms={newFilms} />}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </div>
    </div>
    </BrowserRouter>

  )
}

export default App
