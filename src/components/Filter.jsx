const Filter = ({ filterTitle, setFilterTitle, filterRating, setFilterRating }) => {
  return (
    <div className="filter-container">
      <input 
        type="text" 
        placeholder="Search by title..." 
        value={filterTitle} 
        onChange={(e) => setFilterTitle(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Min rating (e.g., 4)" 
        value={filterRating} 
        onChange={(e) => setFilterRating(e.target.value)} 
        min="0"
        max="5"
        step="0.1"
      />
    </div>
  );
};

export default Filter;