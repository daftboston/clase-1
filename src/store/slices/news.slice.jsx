import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoading } from "./isLoading.slice";

export const newsSlice = createSlice({
  name: "news",
  initialState: [],
  reducers: {
    setNews: (state, action) => {
      return action.payload;
    }
  }
});

export const getNewsThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));

  axios
    .get("https://news-app-api.academlo.tech/news/")
    .then((resp) => dispatch(setNews(resp.data)))
    .catch((error) => console.error(error))
    .finally(() => dispatch(setIsLoading(false)));
};

export const filterCategoriesThunk = (id) => (dispatch) => {
  dispatch(setIsLoading(true));

  axios
    .get(`https://news-app-api.academlo.tech/news/?category=${id}`)
    .then((resp) => {
      dispatch(setNews(resp.data));
    })
    .catch((error) => console.error(error))
    .finally(() => dispatch(setIsLoading(false)));
};

export const { setNews } = newsSlice.actions;

export default newsSlice.reducer;