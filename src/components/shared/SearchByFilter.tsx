import React from "react";

const SearchByFilter = () => {
  return (
    <>
      <div className="d-flex align-items-center gap-2 mb-4">
        <div className="position-relative z-n1">
          <input
            type="search"
            placeholder="Search by title or author"
            className="searchInput"
          />
          <span className="searchIcon">
            <img src="/images/search-Icon.svg" alt="search" />
          </span>
        </div>
        <button className="border-0 bg-transparent">
          <img src="/images/filter-Icon.svg" alt="filter" />
        </button>
      </div>
    </>
  );
};

export default SearchByFilter;
