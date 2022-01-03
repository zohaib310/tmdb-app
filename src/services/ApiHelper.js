import axios from 'axios';
import { api, BASE_URL, KEY } from './app.constants';

export const getPopularMovies = async () => {
  try {
    const data = await axios.get(api.popular_movies);
    return data.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getTrendingMovies = async () => {
  try {
    const data = await axios.get(api.trending_movies);
    return data.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getTopRatedMovies = async () => {
  try {
    const data = await axios.get(api.top_rated_movies);
    return data.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getTopRatedShows = async () => {
  try {
    const data = await axios.get(api.top_rated_show);
    return data.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getOnAirShows = async () => {
  try {
    const data = await axios.get(api.on_air_tv_show);
    return data.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const popularTvShows = async () => {
  try {
    const data = await axios.get(api.popular_tv_show);
    return data.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getPopularPeople = async () => {
  try {
    const data = await axios.get(api.popular_people);
    return data.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getDetails = async (link) => {
  try {
    const data = await axios.get(`${BASE_URL}/${link}${KEY}`);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};
