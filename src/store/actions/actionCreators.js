import * as actionTypes from './actionTypes';

export const setAllMovies = (data) => {
  return {
    type: actionTypes.ALL_MOVIES,
    payload: data,
  };
};

export const setPopularMovies = (data) => {
  return {
    type: actionTypes.POPULAR_MOVIES,
    payload: data,
  };
};

export const setTrendingMovies = (data) => {
  return {
    type: actionTypes.TRENDING_MOVIES,
    payload: data,
  };
};

export const setTopRatedTvShows = (data) => {
  return {
    type: actionTypes.TOP_RATED_TV_SHOWS,
    payload: data,
  };
};

export const setOnAirTvShows = (data) => {
  return {
    type: actionTypes.ON_AIR_TV_SHOWS,
    payload: data,
  };
};

export const setPopularTvShows = (data) => {
  return {
    type: actionTypes.POPULAR_TV_SHOWS,
    payload: data,
  };
};

export const setAllTvShows = (data) => {
  return {
    type: actionTypes.ALL_TV_SHOWS,
    payload: data,
  };
};

export const setPeople = (data) => {
  return {
    type: actionTypes.PEOPLE,
    payload: data,
  };
};

export const setAllPeople = (data) => {
  return {
    type: actionTypes.ALL_PEOPLE,
    payload: data
  }
}
