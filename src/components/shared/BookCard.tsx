import React from "react";

interface BookCardProps {
  bookTitle: string;
  author: string;
}

const BookCard: React.FC<BookCardProps> = ({ bookTitle, author }) => {
  return (
    <div className="bookCard">
      <img className="bookImg" src="/images/book-image.png" alt="book" />
      <div className="cardContent">
        <h2 className="fs-5 fw-bold mb-2">{bookTitle}</h2>
        <div className="d-flex align-items-center gap-1 justify-content-between mb-2">
          <div className="d-flex align-items-center gap-1 author">
            <span className="authorName">{author}.</span> Author
          </div>
          <div className="availableTag">Available</div>
          {/* <div className="availableTag reservedTag">Reserved</div> */}
        </div>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="d-flex align-items-center gap-2">
            <img src="/images/filled-star.svg" alt="rating" />
            <img src="/images/filled-star.svg" alt="rating" />
            <img src="/images/filled-star.svg" alt="rating" />
            <img src="/images/filled-star.svg" alt="rating" />
            <img src="/images/unfilled-Star.svg" alt="rating" />
            <strong className="bookSold">450 sold</strong>
          </div>
          <button className="bg-transparent border-0">
            <img src="/images/unfilled-heart-Icon.svg" alt="UnlikeLike" />
            {/* <img src="/images/filled-heart-Icon.svg" alt="like" /> */}
          </button>
        </div>
        <div className="d-flex align-items-center gap-2">
          <button className="btnPrimary w-100">Request</button>
          <button className="btnSecondary w-100">Chat Owner</button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
