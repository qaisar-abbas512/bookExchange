import React from "react";

interface SentEmailProps {
  title: string;
  content: string;
}

const ExploreBook: React.FC<SentEmailProps> = ({ title, content }) => {
  return (
    <>
      <div className="exploreBox">
        <h2 className="title">{title}</h2>
        <p className="content">{content}</p>
      </div>
    </>
  );
};

export default ExploreBook;
