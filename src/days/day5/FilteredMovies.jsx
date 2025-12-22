// Exercise 2: Filter High-Rated Movies
// Modify Exercise 1 to only show movies with a rating above 8.7.


const FilteredMovies = ({movies}) => {
    const FilteredMovies = movies.filter((movies => movies.rating > 8.7))
    return (
        <div>
            {FilteredMovies.map(movies => (
                <div 
                key={movies.id}
                style={{
                    fontSize: '24px',
                    fontWeight: 'bolder',
                    color: 'white',
                    fontStyle: 'italic'
                }}>
                <span>Movie: {movies.title} </span>   
                <span>(Rating: {movies.rating})</span>  
                </div>
            ))}
        </div>
    )
}

export default FilteredMovies