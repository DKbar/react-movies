import React from "react";
import {Movies} from "../components/Movies";
import {Preloader} from "../components/Preloader";
import {Search} from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

export const Main = () => {
    const [movies, setMovies] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
                fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
                        .then(response => response.json())
                        .then(data => {
                            setMovies(data.Search)
                            setLoading(false)
                        })
                        .catch((err) => {
                            console.error(err)
                            setLoading(false)
                        })
            },
            []
    )

    const searchMovies = ({search, type}) => {
        setLoading(true)
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}${type !== 'all' ? `&type=${type}` : ''}`)
                .then(response => response.json())
                .then(data => {
                    setMovies(data.Search);
                    setLoading(false)
                })
                .catch((err) => {
                    console.error(err)
                    setLoading(false)
                })
    }

    return <main className='container content'>
        <Search onSearchChange={searchMovies}/>
        {!loading
                ? <Movies movies={movies}/>
                : <Preloader/>
        }
    </main>
}