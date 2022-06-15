import React from 'react'
import DataGrid from 'react-data-grid';

function MovieList({movies}) {
    // const movieList = movies.map(movie => <MovieCard key={movie.id} movie={movie} link={true}/>)
    const columns = [
        {key: 'id', name: 'ID'},
        {key: 'first_name', name: 'FirstName'},
        {key: 'last_name', name: 'LastName'},
        {key: 'email', name: 'Email'},
        {key: 'gender', name: 'Gender'},
        {key: 'ip_address', name: 'IpAddress'}
    ];

    return (
        <DataGrid columns={columns} rows={movies}/>

    )
}

export default MovieList