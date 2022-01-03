import {
  Button,
  Container,
  Grid,
  InputAdornment,
  OutlinedInput,
} from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ItemCard from '../../components/Card/ItemCard';
import { getPopularMovies, getTrendingMovies } from '../../services/ApiHelper';
import { setPopularMovies, setTrendingMovies } from '../../store/actions';
import classes from './Home.module.css';

const Home = () => {
  const data = useSelector((state) => state.apiData);
  const dispatch = useDispatch();
  useEffect(() => {
    const getData = async () => {
      const popularMovies = await getPopularMovies();
      const trendingMovies = await getTrendingMovies();
      dispatch(setPopularMovies(popularMovies));
      dispatch(setTrendingMovies(trendingMovies));
    };
    getData();
  }, [dispatch]);
  return (
    <React.Fragment>
      <Container maxWidth='xl'>
        <Grid
          className={classes.banner}
          container
          direction='column'
          justifyContent='center'
        >
          <div>
            <h1>Welcome.</h1>
            <h3>
              Millions of movies, TV shows and people to discover. Explore now.
            </h3>
          </div>
          <OutlinedInput
            classes={{ root: classes.text_field }}
            placeholder='Search for a movie, tv show, person......'
            endAdornment={
              <InputAdornment position='end'>
                <Button variant='contained' color='secondary'>
                  Search
                </Button>
              </InputAdornment>
            }
          />
        </Grid>
        <div>
          <p className={classes.type_text}>What's Popular</p>
          <Grid
            container
            spacing={3}
            direction='row'
            className={classes.movies}
          >
            {data.popularMovies.map((movie) => (
              <Grid item style={{ paddingTop: 0 }}>
                <ItemCard item={movie} link='/movie' />
              </Grid>
            ))}
          </Grid>
        </div>
        <div>
          <p className={classes.type_text}>Trending</p>
          <Grid
            container
            spacing={3}
            direction='row'
            className={classes.movies}
          >
            {data.trendingMovies.map((movie) => (
              <Grid item style={{ paddingTop: 0 }}>
                <ItemCard item={movie} link='/movie' />
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Home;
