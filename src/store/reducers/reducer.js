import * as actionTypes from '../actions/actionTypes';

const initialState = {
  popularMovies: [],
  freeToWatchMovies: [],
  trendingMovies: [],
  movies: [],
  topRatedTvShows: [],
  onAirTvShows: [],
  popularTvShows: [],
  tvShows: [],
  people: [],
};

const ApiData = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.POPULAR_MOVIES:
      return { ...state, popularMovies: action.payload };
    case actionTypes.ALL_MOVIES:
      return { ...state, movies: action.payload };
    case actionTypes.TRENDING_MOVIES:
      return { ...state, trendingMovies: action.payload };
    case actionTypes.TOP_RATED_TV_SHOWS:
      return { ...state, topRatedTvShows: action.payload };
    case actionTypes.ON_AIR_TV_SHOWS:
      return { ...state, onAirTvShows: action.payload };
    case actionTypes.POPULAR_TV_SHOWS:
      return { ...state, popularTvShows: action.payload };
    case actionTypes.ALL_TV_SHOWS:
      return { ...state, tvShows: action.payload };
    case actionTypes.ALL_PEOPLE:
      return { ...state, people: action.payload };
    default:
      return state;
  }
};

export default ApiData;
