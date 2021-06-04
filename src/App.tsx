import React, { useState } from 'react';
import './styles/App.css';
import SearchBarComponent from './components/SearchBar'
import SearchResultComponent from './components/SearchResult';
import { SearchResult } from './models';

const App = () => {
  const [movieResult, setMovieResult] = useState<SearchResult | undefined>(undefined);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="App">
      <div style={{height: '50px', background: '#333'}}>
        <h4 title='Chargepoint Assessment - OMDB API' style={{lineHeight: '50px', paddingLeft: '10px', textAlign: 'left', color: '#fff'}}><b>Chargepoint Assessment - OMDB API</b></h4>
      </div>
      <div className="container" style={{background: '#1d1d1d'}}>
        <div className="row">
          <SearchBarComponent searchResult={setMovieResult} searchTerm={setSearchTerm}/>
          <SearchResultComponent searchResult={movieResult} setNewResults={setMovieResult} searchTerm={searchTerm}/>
          {/* <MovieDetailsComponent searchResult={movieResult} /> */}
        </div>
      </div>
      <div style={{height: '50px', background: '#333', position: 'fixed', bottom: 0, width: '100%'}}>
        <p title='Copyright XYZ' style={{lineHeight: '50px', color: '#fff'}}>&copy; {new Date().getFullYear()} XYZ</p>
      </div>
    </div>
  );
}

export default App;
