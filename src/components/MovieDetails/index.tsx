import React, { FC } from 'react';
import { MovieResult } from '../../models';
import '../../styles/movieDetails.css';
import ErrorComponent from '../ErrorComponent';
import { NO_IMG } from '../../config';

interface MovieDetailsProps {
  movieDetails: MovieResult | undefined;
}

const MovieDetails: FC<MovieDetailsProps> = ({ movieDetails }) => {
  return (
    <>
      {movieDetails?.Response.toLowerCase() === 'true' ? (
        <div
          className="movie-result-block"
          key={`movie-details-${movieDetails.imdbID}`}
        >
          <h1 title={movieDetails?.Title} aria-label={movieDetails?.Title}>
            {movieDetails?.Title} ({movieDetails?.Year})
          </h1>
          <p
            title={`Runtime: ${movieDetails?.Runtime}`}
            aria-label={`Runtime: ${movieDetails?.Runtime}`}
          >
            {movieDetails?.Runtime}
          </p>
          <p
            title={`Rated: ${movieDetails?.Rated}`}
            aria-label={`Rated: ${movieDetails?.Rated}`}
          >
            Rated: {movieDetails?.Rated}
          </p>
          <p
            title={`Languages: ${movieDetails?.Language}`}
            aria-label={`Languages: ${movieDetails?.Language}`}
          >
            Languages: {movieDetails?.Language}
          </p>
          <p
            title={`Countries: ${movieDetails?.Country}`}
            aria-label={`Countries: ${movieDetails?.Country}`}
          >
            Countries: {movieDetails?.Country}
          </p>
          <div className="movie-result-img-block">
            <img
              src={
                movieDetails?.Poster.startsWith('http')
                  ? movieDetails?.Poster
                  : NO_IMG
              }
              width="100%"
              style={{ alignContent: 'start' }}
              alt={`Movie - ${movieDetails?.Title} Released in ${movieDetails?.Released}`}
            />
          </div>
          <div>
            <p>
              {movieDetails?.Genre.split(', ').map(genre => (
                <span
                  key={`genre-${genre}`}
                  title={`Genre: ${genre}`}
                  aria-label={`Genre: ${genre}`}
                  className="genre-items"
                >
                  {genre}
                </span>
              ))}
            </p>
            <p
              title={`Synopsis: ${movieDetails?.Plot}`}
              aria-label={`Synopsis: ${movieDetails?.Plot}`}
            >
              <b>Synopsis: </b>
              <br />
              {movieDetails?.Plot}
            </p>
            <hr />
            <p
              title={`Directors: ${movieDetails?.Director}`}
              aria-label={`Directors: ${movieDetails?.Director}`}
            >
              <b>Director: </b>
              <br />
              {movieDetails?.Director}
            </p>
            <p
              title={`Writers: ${movieDetails?.Director}`}
              aria-label={`Writers: ${movieDetails?.Director}`}
            >
              <b>Writers:</b>
              <br />
              {movieDetails?.Writer}
            </p>
            <p
              title={`Actors: ${movieDetails?.Director}`}
              aria-label={`Actors: ${movieDetails?.Director}`}
            >
              <b>Actors:</b>
              <br />
              {movieDetails?.Actors}
            </p>
          </div>
          <hr />
          <div className="row center-text">
            <div className="col">
              <p className="ratings">IMDB Rating</p>
              <p
                title={`IMDB Rating: ${movieDetails?.imdbRating}`}
                aria-label={`IMDB Rating: ${movieDetails?.imdbRating}`}
              >
                {movieDetails?.imdbRating}
              </p>
            </div>
            <div className="col">
              <p className="ratings">metascore</p>
              <p
                title={`Metascore Rating: ${movieDetails?.Metascore}`}
                aria-label={`Metascore Rating: ${movieDetails?.Metascore}`}
              >
                {movieDetails?.Metascore}
              </p>
            </div>
            {movieDetails?.Ratings.map((rating, index) => (
              <div className="col" key={`rating-${index}`}>
                <p className="ratings">{rating.Source}</p>
                <p
                  title={`Other Ratings: ${rating.Source} - ${rating.Value}`}
                  aria-label={`Other Ratings: ${rating.Source} - ${rating.Value}`}
                >
                  {rating.Value}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <ErrorComponent errorMessage={movieDetails?.Error} />
      )}
    </>
  );
};

export default MovieDetails;
