


const MovieCard = ({film,i}) => {
    return (
        <div className='movieCard'>
        <h3>{film.title}</h3>
                    <p>{film.description}</p>
                    <p className='p-image'><img src={film.posterUrl} alt={`pic ${i}`} /></p>
            <p>{film.rating}</p>
            </div>
    )
}

export default MovieCard
