import React, { useContext } from 'react';
import { EventContext } from '../context/EventContext';
import './SearchFilter.css';

const SearchFilter = () => {
  const { filterEvents, searchEvents } = useContext(EventContext);

  const categories = ['All', 'Workshop', 'Hackathon', 'Fest', 'Seminar'];

  const handleCategoryChange = (e) => {
    filterEvents(e.target.value);
  };

  const handleSearch = (e) => {
    searchEvents(e.target.value);
  };

  return (
    <div className="search-filter-container">
      <div className="search-box">
        <input
          type="text"
          className="search-input"
          placeholder="Search events by title, description, or category..."
          onChange={handleSearch}
        />
        <span className="search-icon">🔍</span>
      </div>

      <div className="filter-buttons">
        {categories.map(category => (
          <button
            key={category}
            className="filter-btn"
            onClick={() => filterEvents(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchFilter;
