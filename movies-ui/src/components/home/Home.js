import React, {Component} from 'react'
import {Container} from 'semantic-ui-react'
import {handleLogError} from '../misc/Helpers'
import {moviesApi} from '../misc/MoviesApi'
import MovieList from './MovieList'

class Home extends Component {
    state = {
        isLoading: false,
        movies: []
    }

    async componentDidMount() {
        this.setState({isLoading: true})
        try {
            // const response = await moviesApi.getMovies()
            // const movies = response.data

            const movies = [{
                "id": 1,
                "first_name": "Tanya",
                "last_name": "Frederick",
                "email": "tfrederick0@google.ru",
                "gender": "Female",
                "ip_address": "102.119.103.32"
            }, {
                "id": 2,
                "first_name": "Wallis",
                "last_name": "Wadham",
                "email": "wwadham1@berkeley.edu",
                "gender": "Male",
                "ip_address": "240.39.88.134"
            }, {
                "id": 3,
                "first_name": "Hiram",
                "last_name": "Meeson",
                "email": "hmeeson2@pen.io",
                "gender": "Male",
                "ip_address": "55.77.111.96"
            }, {
                "id": 4,
                "first_name": "Shelden",
                "last_name": "Lambell",
                "email": "slambell3@nydailynews.com",
                "gender": "Male",
                "ip_address": "248.59.241.191"
            }, {
                "id": 5,
                "first_name": "Lock",
                "last_name": "Firman",
                "email": "lfirman4@miitbeian.gov.cn",
                "gender": "Male",
                "ip_address": "119.133.174.83"
            }, {
                "id": 6,
                "first_name": "Mitzi",
                "last_name": "Siemantel",
                "email": "msiemantel5@mit.edu",
                "gender": "Female",
                "ip_address": "215.44.235.201"
            }, {
                "id": 7,
                "first_name": "Dotti",
                "last_name": "Tomovic",
                "email": "dtomovic6@myspace.com",
                "gender": "Female",
                "ip_address": "94.207.101.120"
            }, {
                "id": 8,
                "first_name": "Dalis",
                "last_name": "Hacquard",
                "email": "dhacquard7@sina.com.cn",
                "gender": "Agender",
                "ip_address": "229.82.222.171"
            }, {
                "id": 9,
                "first_name": "Bale",
                "last_name": "Opfer",
                "email": "bopfer8@xinhuanet.com",
                "gender": "Male",
                "ip_address": "185.162.147.102"
            }, {
                "id": 10,
                "first_name": "Perren",
                "last_name": "Andrieu",
                "email": "pandrieu9@sciencedaily.com",
                "gender": "Male",
                "ip_address": "128.166.147.147"
            }];

            this.setState({movies, isLoading: false})
        } catch (error) {
            handleLogError(error)
        }
    }

    render() {
        const {isLoading, movies} = this.state
        return (
            isLoading ? <></> : (
                <Container>
                    <MovieList movies={movies}/>
                </Container>
            )
        )
    }
}

export default Home