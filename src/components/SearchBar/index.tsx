import React, { FC, useState } from 'react';
import '../../styles/searchBar.css';
import { getMovieList } from '../../services/omdbService';
import ErrorComponent from '../ErrorComponent';
interface SearchBarProps {
  searchResult: Function;
  searchTerm: Function;
  setCurrentPage: Function;
}

const SearchBar: FC<SearchBarProps> = ({ searchResult, searchTerm, setCurrentPage }) => {
  const [searchText, setSearchText] = useState('');
  const [hasReqError, setHasReqError] = useState(false);

  const searchMovie = async () => {
    searchResult(undefined);
    setCurrentPage(1);
    try {
      setHasReqError(false);
      const response = await getMovieList(searchText);
      searchResult(response);
    } catch (err) {
      setHasReqError(true);
      searchResult(undefined);
    }
  };

  const updateSearchTerm = (searchWord: string) => {
    setSearchText(searchWord);
    searchTerm(searchWord);
  };

  return (
    <>
      <div className="container" style={{ marginTop: '20px' }}>
        <p>Use the search bar below to search for a movie title</p>
        <div className="input-group flex">
          <input
            className="form-control search-input"
            placeholder="Search for a movie title"
            type="text"
            onChange={e => updateSearchTerm(e.target.value)}
            onKeyPress={e => (e.key === 'Enter' ? searchMovie() : '')}
          />
          <button className="btn btn-success" onClick={() => searchMovie()}>
            Search
          </button>
        </div>
        {hasReqError && (
          <div style={{ marginTop: '20px' }}>
            <ErrorComponent errorMessage="Unable to make the query at this time. Please try again later" />
          </div>
        )}
      </div>
    </>
  );
};

export default SearchBar;
