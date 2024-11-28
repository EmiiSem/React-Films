import React from "react";

import { Movies } from "../componets/Movies"
import { Preloader } from "../componets/Preloader"
import { Search } from "../componets/Search"

const API_KEY = process.env.REACT_APP_API_KEY

class Main extends React.Component {
    constructor() {
        super();
        
        this.state = {
            movies: [],
            loading: true
        }
    }

    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=batman`)
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search, loading: false}))
    }

    searchMoveis = (str, type = "all") => {
        this.setState({loading: true})
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== "all" ? `&type=${type}` : ""}`)
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search, loading: false}))
    }

    render() {
        const {movies, loading} = this.state
        return <main className="container content">
            <Search searchMoveis={this.searchMoveis} />
            {
                loading ? (<Preloader />) : (<Movies movies={movies} />)
            }
        </main>
    }
}

export { Main }