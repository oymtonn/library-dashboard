import React from 'react';

const FilterSelect = ({ options, setFilter }) => {
  return (
    <select onChange={(e) => setFilter(e.target.value)} className="filter-select">
      <option value="All">All Years</option>
      {options.map((year, index) => (
        <option key={index} value={year}>
          {year}
        </option>
      ))}
    </select>
  );
};

export default FilterSelect;
