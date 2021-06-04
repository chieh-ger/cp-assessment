import React, { FC, useState, useEffect, useRef } from 'react';
import { SearchResult, MovieResult } from '../../models';
import '../../styles/searchResult.css';
import ErrorComponent from '../ErrorComponent';
import MovieDetailsComponent from '../MovieDetails';
import { getMovie, getMovieList } from '../../services/omdbService';
import { NO_IMG } from '../../config';

interface SearchResultProps {
    searchResult: SearchResult | undefined;
    setNewResults: Function;
    searchTerm: string;
}

const SearchResultComponent: FC<SearchResultProps> = ({ searchResult, setNewResults, searchTerm }) => {
    const [showDetails, setShowDetails] = useState<boolean>(false);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [current, setCurrent] = useState<number>(1);
    const [movieDetails, setMovieDetails] = useState<MovieResult | undefined>(undefined);
    const movieDetailRef = useRef(null);

    useEffect(() => {
        setShowDetails(false);
        searchResult?.totalResults && searchResult?.Response.toLowerCase() === 'true'
            ? setTotalPages(Math.floor(parseInt(searchResult.totalResults) / 10))
            : setTotalPages(1);
    }, [searchResult])

    const updatePage = async (newVal: number) => {
        setCurrent(newVal);
        setNewResults(await getMovieList(searchTerm, newVal));
    }

    const getMovieDetails = async (title: string) => {
        setShowDetails(true);
        setMovieDetails(await getMovie(title));
        //@ts-ignore
        movieDetailRef.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div className='container mt-20'>
            {searchResult && searchResult?.Response.toLowerCase() === 'true' && <p>Page {current} of {totalPages === 0 ? '1' : totalPages}</p>}
            <div className="movie-results">
                {searchResult?.Response.toLowerCase() === 'true' && searchResult.Search.map((searchItem, index) => (
                    <div title={searchItem.Title} className="movie-card" key={`movie-poster-${searchItem.imdbID}`}>
                        <img tabIndex={index + 1} aria-label={searchItem.Title} src={searchItem.Poster.startsWith('http') ? searchItem.Poster : NO_IMG} className="card-img-top" height='370px' alt={searchItem.Title} onKeyPress={(e) => e.key === 'Enter' ? getMovieDetails(searchItem.Title) : ''} onClick={() => getMovieDetails(searchItem.Title)} />
                    </div>
                ))}
            </div>
            {searchResult && searchResult?.Response.toLowerCase() !== 'true' && <ErrorComponent errorMessage={searchResult?.Error} />}
            {totalPages > 1 && (
                <div className='col-md-12 mt-20 mb-80'>
                    <button className='btn btn-light' tabIndex={199} disabled={current === 1} onClick={() => updatePage(current - 1)}>Previous</button>
                    <button className='btn btn-info' tabIndex={200} disabled={current === totalPages} onClick={() => updatePage(current + 1)}>Next</button>
                </div>
            )}
            {showDetails && (
                <div ref={movieDetailRef} className='mb-120'>
                    <hr />
                    <MovieDetailsComponent movieDetails={movieDetails} />
                </div>
            )}
        </div>
    );
}

export default SearchResultComponent;