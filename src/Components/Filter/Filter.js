import React from 'react';

export default function Filter({ types, selectedType, setSelectedType, }) {
  return (
    <div className="filter">
      <select value={selectedType} onChange={(e) => {
        setSelectedType(e.target.value);
      }}
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