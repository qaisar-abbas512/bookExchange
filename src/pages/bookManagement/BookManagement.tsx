import React from "react";
import Header from "../../components/header/Header";
import ExploreBook from "../../components/shared/ExploreBook";
import AddBookOffcanvas from "../../components/addBook/AddBook";
import ManageBooksTable from "../../components/bkMangement/ManageBooksTable";

const BookManagement = () => {
  return (
    <>
      <div className="position-sticky top-0 z-3">
        <Header />
      </div>
      <div className="container px-5">
        <ExploreBook
          title={"Manage Your Data"}
          content={"Manage your listed books and related information. "}
        />
        <div className="d-flex align-items-center justify-content-between bg-secondary bg-opacity-10 p-3 rounded-3 mb-4">
          <h3 className="mb-0">Manage Books</h3>
          <div>
            <AddBookOffcanvas buttonLabel="+ Add New Book" />
          </div>
        </div>
        <div className="w-100">
          <ManageBooksTable />
        </div>
      </div>
    </>
  );
};

export default BookManagement;
