import React from 'react';
import Proptypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import './Movie.css';


function Movie({title, poster, genres, synopsis, year, rating}) {
  return (
    <div className="Movie">
      {}
      <div className="Movie-Column">
        <MoviePoster poster={poster} alt={title}/>
      </div>
      {}
      <div className="Movie-Column">
        <div className="Movie-Year">
          {year}
        </div>
        <h1>{title}</h1>
        <div className="Movie-Rating">
          <Rater total={5} rating={rating/2} interactive={false} />
        </div>
        <div className="Movie-Genres">
          {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
        </div>
        <div className="Movie-Synopsis">
          <LinesEllipsis
            text={synopsis}
            maxLine='3'
            ellipsis='..'
            trimRight
            basedOn='letters'
          />
        </div>
      </div>
    </div>
  )
}

function MoviePoster({poster, alt}) {
  return (
      <img src={poster} alt={alt} title={alt} className="Movie-Poster" />
  )
}
function MovieGenre({genre}) {
  return (
    <span className="Movie-Genre">{genre} </span>
  )
}

Movie.propTypes = {
  title: Proptypes.string.isRequired,
  poster: Proptypes.string.isRequired,
  genres: Proptypes.array.isRequired,
  synopsis: Proptypes.string.isRequired,
  year: Proptypes.number.isRequired,
  rating: Proptypes.number.isRequired
}
MoviePoster.propTypes = {
  poster: Proptypes.string.isRequired,
  alt: Proptypes.string.isRequired
}
MovieGenre.propTypes = {
  genre: Proptypes.string.isRequired
}

export default Movie
