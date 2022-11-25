import MovieCard from './MovieCard'


const MovieList = ({films}) => {
    return (
            <div className='movieList' >
        {films.map((film,i) => (
                    <MovieCard film={film} i={i} />
                    ))}
                    </div>
    )
}

export default MovieList
