import React from 'react';

export default function Filter({ types, selectedType, setSelectedType, setChangePage }) {
  return (
    <div className="filter">
      <select value={selectedType} onChange={(e) => {
        setSelectedType(e.target.value);
        setChangePage(1);}}
      >
        <option value="all">All</option>
        {types.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
}