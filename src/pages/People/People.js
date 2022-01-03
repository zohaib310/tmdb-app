import React, { useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import ItemCard from '../../components/Card/ItemCard';
import { getPopularPeople } from '../../services/ApiHelper';
import { setAllPeople } from '../../store/actions';

const People = () => {
  const people = useSelector((state) => state.apiData.people);
  const dispatch = useDispatch();
  useEffect(() => {
    const getData = async () => {
      const popularPeople = await getPopularPeople();
      // const allPeople = [...popularPeople];
      dispatch(setAllPeople(popularPeople));
    };
    getData();
  }, [dispatch]);

  return (
    <Container maxWidth='xl'>
      <Grid container item xs={12} spacing={2}>
        {people.map((people) => (
          <Grid item spacing={5}>
            <ItemCard item={people} link='/person' />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default People;
