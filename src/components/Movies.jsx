import {Movie} from "./Movie";

export const Movies = (props) =>  {
    const {movies} = props;

    return <div className='movies'>
        {movies != null
                ? movies.map(movie => <Movie key={movie.imdbID} {...movie}/>)
                : <h4>Nothing found</h4>
        }
    </div>
}