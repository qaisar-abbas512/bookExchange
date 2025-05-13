import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import AddBookOffcanvas from "../addBook/AddBook";

const SearchByFilter = () => {
  const [search, setSearch] = React.useState("");
  return (
    <>
      <div className="d-flex align-items-center gap-2 mb-4 ">
        <div className="position-relative">
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by title or author"
            className="searchInput"
          />
          <span className="searchIcon">
            <img src="/images/search-Icon.svg" alt="search" />
          </span>
        </div>
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic" className="btnFilter">
            <img src="/images/filter-Icon.svg" alt="filter" />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <AddBookOffcanvas buttonLabel="+ Add Book" />
      </div>
    </>
  );
};

export default SearchByFilter;
