import { Container, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ItemCard from '../../components/Card/ItemCard';
import {
  getPopularMovies,
  getTopRatedMovies,
  getTrendingMovies,
} from '../../services/ApiHelper';
import { setAllMovies } from '../../store/actions';

const Movies = () => {
  const movies = useSelector((state) => state.apiData.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    const getData = async () => {
      const popularMovies = await getPopularMovies();
      const trendingMovies = await getTrendingMovies();
      const topRated = await getTopRatedMovies();
      const allMovies = [...topRated, ...popularMovies, ...trendingMovies];
      dispatch(setAllMovies(allMovies));
    };
    getData();
  }, [dispatch]);

  return (
    <Container maxWidth='xl'>
      <Grid container item xs={12} spacing={2}>
        {movies.map((movie) => (
          <Grid item spacing={5}>
            <ItemCard item={movie} link='/movie' />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Movies;
