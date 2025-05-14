import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import ExploreBook from "../../components/shared/ExploreBook";
import SearchByFilter from "../../components/shared/SearchByFilter";
import BookCard from "../../components/shared/BookCard";
import { Col, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import { dummyApi } from "../../services/services";

const Home = () => {
  const [data, setData] = useState<any>([]);
  const getDummyValue = async () => {
    try {
      const data = await dummyApi();
      console.log(data, "data");
      setData(data);
    } catch (err: any) {
      toast.error(err);
    }
  };

  useEffect(() => {
    getDummyValue(); // No argument passed
  }, []);
  return (
    <>
      <div className="position-sticky top-0 z-3">
        <Header />
      </div>
      <div className="container px-5">
        <ExploreBook
          title={"Explore Books"}
          content={
            "Explore a world of stories, knowledge, and imagination through every page you turn. "
          }
        />
        <SearchByFilter />
        <div className="bookBoxes">
          <Row className="g-4">
            {data.map((item: any, index: number) => (
              <Col xs={6} md={3} key={item.id || index}>
                <BookCard item={item} />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
};

export default Home;
