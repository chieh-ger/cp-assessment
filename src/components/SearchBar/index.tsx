import React, { FC, useState } from 'react';
import '../../styles/searchBar.css';
import { getMovieList } from '../../services/omdbService';

interface SearchBarProps {
  searchResult: Function;
  searchTerm: Function;
}

const SearchBar: FC<SearchBarProps> = ({ searchResult, searchTerm }) => {
  const [searchText, setSearchText] = useState('');

  const searchMovie = async () => {
    searchResult(undefined);
    searchResult(await getMovieList(searchText));
  }

  const updateSearchTerm = (searchWord: string) => {
    setSearchText(searchWord);
    searchTerm(searchWord);
  }

  return (
    <>
      <div className='container' style={{marginTop: '20px'}}>
        <p>Use the search bar below to search for a movie title</p>
        <div className="input-group flex">
          <input className='form-control search-input' placeholder='Search for a movie title' type='text' onChange={e => updateSearchTerm(e.target.value)} onKeyPress={(e) => e.key === 'Enter' ? searchMovie() : ''} />
          <button className="btn btn-success" onClick={() => searchMovie()}>Search</button>
        </div>
      </div>
    </>
  );
}

export default SearchBar;