export const BASE_URL = 'https://api.themoviedb.org/3';
export const KEY = '?api_key=960f6a30402c6d150734e55dfe30ed04';

export const api = {
  //MOvies to be displayed on the HOME SCREEN
  popular_movies: `${BASE_URL}/movie/popular${KEY}`,
  trending_movies: `${BASE_URL}/trending/all/day${KEY}`,
  top_rated_movies: `${BASE_URL}/movie/top_rated${KEY}`,

  //TV Shows
  top_rated_show: `${BASE_URL}/tv/top_rated${KEY}`,
  on_air_tv_show: `${BASE_URL}/tv/on_the_air${KEY}`,
  popular_tv_show: `${BASE_URL}/tv/popular${KEY}`,

  //PEOPLE
  popular_people: `${BASE_URL}/person/popular${KEY}`,
};
