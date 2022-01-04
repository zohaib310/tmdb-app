import { CardMedia, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useMemo, useState } from 'react';
import { getDetails } from '../../services/ApiHelper';
import classes from './DetailsPage.module.css';

const DetailsPage = () => {
  const [details, setDetails] = useState({});
  const imageBseUrl = useMemo(
    () => 'https://www.themoviedb.org/t/p/w220_and_h330_face',
    []
  );

  useEffect(() => {
    const getData = async () => {
      const data = await getDetails(window.location.pathname);
      setDetails(data);
      console.log(data);
    };
    getData();
  }, []);
  if (Object.keys(details).length === 0) {
    return null;
  }
  return (
    <>
      <Box className='w-100' style={{ background: '#032541', marginTop: 70 }}>
        <Container style={{ padding: '4rem 0rem' }}>
          <Grid item container spacing={5} style={{ alignitems: 'start' }}>
            <Grid item xs={12} md={12} lg={3}>
              <CardMedia
                image={`${imageBseUrl}${
                  details.poster_path || details.profile_path
                }`}
                className={classes.details_image}
                title={details.title || details.name}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={9}>
              <Typography
                variant='h5'
                color='initial'
                className={classes.color_heading}
              >
                {details.title || details.name}
              </Typography>
              <p className={classes.color_heading}>{details.tagline}</p>
              <br />
              <Typography
                variant='h6'
                color='initial'
                className={classes.color_heading}
              >
                OverView:
              </Typography>
              <p className={classes.color_heading}>
                {details.overview || details.biography}
              </p>
              <Grid container spacing={5} style={{ paddingTop: '5rem' }}>
                <Grid item xs={12} md={6} lg={3}>
                  <Typography
                    variant='h6'
                    component='h6'
                    className={classes.color_heading}
                  >
                    {details.birthday ? 'Date of Birth' : 'Release Date'}
                  </Typography>
                  <p className={classes.color_heading}>
                    {details.first_air_date ||
                      details.release_date ||
                      details.birthday}
                  </p>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                  <Typography
                    variant='h6'
                    component='h6'
                    className={classes.color_heading}
                  >
                    {details.place_of_birth ? 'Place of Birth' : 'Language'}
                  </Typography>
                  <p className={classes.color_heading}>
                    {details.place_of_birth
                      ? details.place_of_birth
                      : details.original_language}
                  </p>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                  <Typography
                    variant='h6'
                    component='h6'
                    className={classes.color_heading}
                  >
                    {details.known_for_department
                      ? 'Reason of Popularity'
                      : 'Revenue'}
                  </Typography>
                  <p className={classes.color_heading}>
                    {details.known_for_department
                      ? details.known_for_department
                      : details.revenue ||
                        Math.floor(Math.random() * 90000) + 10000}
                  </p>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                  <Typography
                    variant='h6'
                    component='h6'
                    className={classes.color_heading}
                  >
                    Popularity
                  </Typography>
                  <p className={classes.color_heading}>{details.popularity}</p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* <BoxContent /> */}
    </>
  );
};

export default DetailsPage;
