import {NavLink} from 'react-router-dom'
const NAvbar = (props) => {
    
  const navCss=({isActive})=>{
    return { fontWeight:isActive?'bold':'normal',
             textDecoration:isActive?'none':'underline'
  }
  }
  return (

    <div className='navbar'>
      <div>
      <NavLink style={navCss} to='/'>Home</NavLink>
      <NavLink style={navCss} to='addmovie'>Add Movie</NavLink>
      <NavLink style={navCss} to='about'>About</NavLink>
      <NavLink style={navCss} to='contact'>Contact</NavLink>
    </div>
    <div>
    <input placeholder='Filter Title' type='search' name='title'  onChange={props.handelFilterChange} value={props.filterMov.title}  />
    <input placeholder='Filter Rating' type='search' name='rating' onChange={props.handelFilterChange} value={props.filterMov.rating} />
    </div>
    </div> 
  )
}

export default NAvbar
