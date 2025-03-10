import React from "react";
import Header from "../../components/header/Header";
import ExploreBook from "../../components/shared/ExploreBook";
import SearchByFilter from "../../components/shared/SearchByFilter";
import BookCard from "../../components/shared/BookCard";
import { Col, Row } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <div className="position-sticky top-0">
        <Header />
      </div>
      <div className="container px-5">
        <ExploreBook
          title={"Explore Books"}
          content={
            "Lorem ipsum dolor sit amet consectetur. At nisi vel viverra in turpis. Faucibus faucibus tincidunt lobortis "
          }
        />
        <SearchByFilter />
        <div className="bookBoxes">
          <Row className="g-4">
            <Col xs={6} md={3}>
              <BookCard bookTitle={"Milk and honey"} author={"Rupi Kaur"} />
            </Col>
            <Col xs={6} md={3}>
              <BookCard bookTitle={"Milk and honey"} author={"Rupi Kaur"} />
            </Col>
            <Col xs={6} md={3}>
              <BookCard bookTitle={"Milk and honey"} author={"Rupi Kaur"} />
            </Col>
            <Col xs={6} md={3}>
              <BookCard bookTitle={"Milk and honey"} author={"Rupi Kaur"} />
            </Col>
            <Col xs={6} md={3}>
              <BookCard bookTitle={"Milk and honey"} author={"Rupi Kaur"} />
            </Col>
            <Col xs={6} md={3}>
              <BookCard bookTitle={"Milk and honey"} author={"Rupi Kaur"} />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Home;
