import { useSelector, useDispatch } from "react-redux";
import {
  getNewsThunk,
  filterCategoriesThunk
} from "../store/slices/news.slice";
import { useEffect, useState } from "react";
import { Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    dispatch(getNewsThunk());

    axios
      .get("http://news-app-api.academlo.tech/categories/")
      .then((resp) => setCategories(resp.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Home</h1>
      {categories.map((category) => (
        <Button
          key={category.id}
          variant="primary"
          onClick={() => dispatch(filterCategoriesThunk(category.id))}
        >
          {category.name}
        </Button>
      ))}
      <Button variant="dark" onClick={() => dispatch(getNewsThunk())}>
        Ver todos
      </Button>
      <Row xs={1} md={2} lg={3}>
        {news?.map((newsItem) => (
          <Col key={newsItem.id}>
            <Card>
              <Card.Img
                variant="top"
                src={newsItem.image}
                style={{ height: 200, objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{newsItem.headline}</Card.Title>
                <Card.Text>{newsItem.lead}</Card.Text>
                <Button variant="primary" as={Link} to={`/news/${newsItem.id}`}>
                  Ver detalle
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;