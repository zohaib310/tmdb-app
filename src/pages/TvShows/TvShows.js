import { Container, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ItemCard from '../../components/Card/ItemCard';
import {
  getTopRatedShows,
  getOnAirShows,
  popularTvShows,
} from '../../services/ApiHelper';
import { setAllTvShows } from '../../store/actions';

const TvShows = () => {
  const tvShows = useSelector((state) => state.apiData.tvShows);
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      const topRatedTvShows = await getTopRatedShows();
      const onAirTvShows = await getOnAirShows();
      const popularTvSHows = await popularTvShows();
      const allTvShows = [
        ...topRatedTvShows,
        ...onAirTvShows,
        ...popularTvSHows,
      ];
      dispatch(setAllTvShows(allTvShows));
    };
    getData();
  }, [dispatch]);

  return (
    <Container maxWidth='xl'>
      <Grid container item xs={12} spacing={2}>
        {tvShows.map((show) => (
          <Grid item spacing={5}>
            <ItemCard item={show} link='/tv' />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TvShows;
