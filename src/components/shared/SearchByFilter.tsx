import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import AddBookOffcanvas from "../addBook/AddBook";
import Form from "react-bootstrap/Form";

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
        <div className="d-flex align-items-center gap-1">
          <Dropdown className="filterDrp mt-0">
            <Dropdown.Toggle id="dropdown-basic" className="btnFilter">
              <img src="/images/filter-Icon.svg" alt="filter" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <div className="d-flex align-items-center gap-1 p-3">
                <img src="/images/filter-Icon.svg" alt="filter" />
                <span className="text-black">Choose Filter</span>
              </div>
              <hr className="p-0 m-0" />
              <div className="p-3 pb-0">
                <Form.Select
                  aria-label="Default select example"
                  className="mb-3"
                >
                  <option>Select Genre</option>
                  <option value="1">Fiction</option>
                  <option value="2">Mystery</option>
                  <option value="3">Science Fiction</option>
                </Form.Select>{" "}
                <Form.Control type="text" placeholder="Enter location" />
              </div>
              <div className="d-flex align-items-center justify-content-end p-3">
                <button className="btnPrimary py-1 fw-medium">Done</button>
              </div>
            </Dropdown.Menu>
          </Dropdown>
          <div className="d-flex align-items-center gap-1 filterCld">
            <span className="filterNmbr">+2</span>
            <button className="bg-transparent border-0 ">
              <img src="/images/close-icon.svg" alt="close" />
            </button>
          </div>
        </div>
        <AddBookOffcanvas buttonLabel="+ Add Book" />
      </div>
    </>
  );
};

export default SearchByFilter;
