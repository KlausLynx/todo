const SortedMovies = ({movies}) => {
    const SortedMovies = movies.sort((a, b) => b.rating - a.rating)
    return (
        <div>
            {SortedMovies.map((movies) => (
                <div key={movies.id}>
                <span> {movies.title} </span>
                <span>{movies.rating}</span>
                </div>
            ))}
        </div>
    )
}

export default SortedMovies