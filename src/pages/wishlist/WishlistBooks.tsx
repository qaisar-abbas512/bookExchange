import React from "react";
import Header from "../../components/header/Header";
import ExploreBook from "../../components/shared/ExploreBook";
import WishlistTable from "../../components/bkMangement/WishlistTable";

const WishlistBooks = () => {
  return (
    <>
      <div className="position-sticky top-0 z-3">
        <Header />
      </div>
      <div className="container px-5">
        <ExploreBook
          title={"Wishlist Management"}
          content={
            "Keep track of the books you've added to your wishlist and manage them easily."
          }
        />

        <div className="w-100">
          <WishlistTable />
        </div>
      </div>
    </>
  );
};

export default WishlistBooks;
