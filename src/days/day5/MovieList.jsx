const MovieList = ({movies}) => {

    return (
        <div>
            {movies.map((movie) => (
                <div key={movie.id}>
                 <span>Movie: {movie.title} (Rating:{movie.rating}) </span>    
                </div>
            ))}
        </div>
    )
}

export default MovieList
