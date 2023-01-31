import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoading } from "../store/slices/isLoading.slice";
import { Button, Col, Row, ListGroup } from "react-bootstrap";
import { filterCategoriesThunk } from "../store/slices/news.slice";

const NewsDetail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  const dispatch = useDispatch();
  const newsRelated = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(setIsLoading(true));

    axios
      .get(`https://news-app-api.academlo.tech/news/${id}/`)
      .then((resp) => {
        setDetail(resp.data);
        dispatch(filterCategoriesThunk(resp.data.category?.id));
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setTimeout(() => {
          dispatch(setIsLoading(false));
        }, 250);
      });
  }, [id]);

  return (
    <div>
      <h1>{detail?.headline}</h1>
      <p>By: {detail?.author}</p>
      <p>{detail?.date}</p>
      <Row>
        <Col lg={9}>
          <img src={detail?.image} alt="" />
          <p>{detail?.image_description}</p>
          {detail?.body?.map((p) => (
            <p key={p.id}> {p.paragraph} </p>
          ))}
        </Col>

        <Col lg="3">
          <h3>Releated News</h3>

          <ListGroup>
            {newsRelated?.map((newsItem) => (
              <ListGroup.Item key={newsItem.id}>
                {newsItem.headline}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};
export default NewsDetail;