import React, { useState } from 'react';
import './styles/app.css';
import SearchBarComponent from './components/SearchBar';
import SearchResultComponent from './components/SearchResult';
import { SearchResult } from './models';

const App = () => {
  const [movieResult, setMovieResult] =
    useState<SearchResult | undefined>(undefined);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="app">
      <div className="app-nav">
        <h4 title="Chargepoint Assessment" className="app-nav-title">
          <b>Chargepoint Assessment</b>
        </h4>
      </div>
      <div className="container" style={{ background: '#1d1d1d' }}>
        <div className="row">
          <SearchBarComponent
            searchResult={setMovieResult}
            searchTerm={setSearchTerm}
          />
          <SearchResultComponent
            searchResult={movieResult}
            setNewResults={setMovieResult}
            searchTerm={searchTerm}
          />
        </div>
      </div>
      <div className="app-nav-bottom">
        <p title="Copyright XYZ" className="app-nav-bottom-text">
          &copy; {new Date().getFullYear()} XYZ
        </p>
      </div>
    </div>
  );
};

export default App;
