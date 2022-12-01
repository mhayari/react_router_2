import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
const Watch = () => {

  const location=useLocation()
    console.log(location)
    const navigate=useNavigate()

    // useEffect(()=>{
    //   alert('hello bro')
    // })
    
  return (
    
        <div className="watch" key={location.state.id}>
            <p className='p-image'><img src={location.state.posterUrl} alt='pic' /></p>
            <div>
            <h3>{location.state.title} </h3>
            <p>{location.state.description} </p>
            <p>{location.state.rating} </p>    
            <button onClick={()=>navigate(-1)}>Return To the Home</button>
            </div>
            </div>
  )
}

export default Watch
