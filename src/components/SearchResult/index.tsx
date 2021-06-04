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
    const [showModal, setShowModal] = useState<boolean>(false);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [current, setCurrent] = useState<number>(1);
    const [movieDetails, setMovieDetails] = useState<MovieResult | undefined>(undefined);
    const movieDetailRef = useRef(null);

    useEffect(() => {
        searchResult?.totalResults && searchResult?.Response.toLowerCase() === 'true'
            ? setTotalPages(Math.floor(parseInt(searchResult.totalResults) / 10))
            : setTotalPages(1);
    }, [searchResult])

    const updatePage = async (newVal: number) => {
        setCurrent(newVal);
        setNewResults(await getMovieList(searchTerm, newVal));
    }

    const getMovieDetails = async (title: string) => {
        setShowModal(true);
        setMovieDetails(await getMovie(title));
        //@ts-ignore
        movieDetailRef.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div className='container mt-20'>
            {searchResult && searchResult?.Response.toLowerCase() === 'true' && <p>Page {current} of {totalPages === 0 ? '1' : totalPages}</p>}
            {searchResult?.Response.toLowerCase() === 'true' && searchResult.Search.map(searchItem => (
                <div className="movie-card">
                    <img aria-label={searchItem.Title} src={searchItem.Poster.startsWith('http') ? searchItem.Poster : NO_IMG} className="card-img-top" height='370px' alt={searchItem.Title} onClick={() => getMovieDetails(searchItem.Title)} />
                </div>
            ))}
            {searchResult && searchResult?.Response.toLowerCase() !== 'true' && <ErrorComponent errorMessage={searchResult?.Error} />}

            {totalPages > 1 && (
                <div className='col-md-12 mt-20 mb-80'>
                    <button className='btn btn-light' disabled={current === 1} onClick={() => updatePage(current - 1)}>Previous</button>
                    <button className='btn btn-info' disabled={current === totalPages} onClick={() => updatePage(current + 1)}>Next</button>
                </div>
            )}
            {showModal && (
                <div ref={movieDetailRef} className='mb-120'>
                    <hr />
                    <MovieDetailsComponent movieDetails={movieDetails} />
                </div>
            )}
        </div>
    );
}

export default SearchResultComponent;