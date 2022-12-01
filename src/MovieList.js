import MovieCard from './MovieCard'


const MovieList = ({films}) => {
    return (
            <div className='movieList' >
        {films.map((film,i) => (
            <div key={film.id}>
                    <MovieCard  film={film} i={i} films={films}  />
                    </div>
                    ))}
                    </div>
    )
}

export default MovieList
