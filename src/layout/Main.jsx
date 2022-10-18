import React from "react";
import {Movies} from "../components/Movies";
import {Preloader} from "../components/Preloader";
import {Search} from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

export class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
        currentSearch: 'matrix'
    }


    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
                .then(response => response.json())
                .then(data => this.setState({movies: data.Search, loading: false}))
    }

    searchMovies = ({search, type}) => {
        this.setState({loading: true})
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}s=${search}${type !== 'all'? `&type=${type}` : '' }`)
                .then(response => response.json())
                .then(data => this.setState({movies: data.Search, loading: false}))
    }

    render() {
        return <main className='container content'>
            <Search onSearchChange={this.searchMovies}/>
            {!this.state.loading
                    ? <Movies movies={this.state.movies}/>
                    : <Preloader />
            }
        </main>
    }
}