import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../assets/images/footer.svg';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <Box className={classes.box}>
        <Container>
          <Grid
            container
            direction='row'
            alignItems='center'
            justifyContent='start'
          >
            <Link to='/'>
              <img className={classes.footer_logo} src={footer} alt='show' />
            </Link>
            <div className={classes.links}>
              <p className={classes.heading}>The Basics</p>
              <p className={classes.link}>About TMDB</p>
              <p className={classes.link}>Contact Us</p>
              <p className={classes.link}>Support Forums</p>
              <p className={classes.link}>API</p>
            </div>
            <div className={classes.links}>
              <p className={classes.heading}>Get Involved</p>
              <p className={classes.link}>Contribution bible</p>
              <p className={classes.link}>3rd Party Applications</p>
              <p className={classes.link}>Add New Movie</p>
              <p className={classes.link}>Add New TV Show</p>
            </div>
            <div className={classes.links}>
              <p className={classes.heading}>COMMUNITY</p>
              <p className={classes.link}>Guidelines</p>
              <p className={classes.link}>Discussions</p>
              <p className={classes.link}>Leaderboard</p>
              <p className={classes.link}>Twitter</p>
            </div>
            <div className={classes.links}>
              <p className={classes.heading}>LEGAL</p>
              <p className={classes.link}>Terms of Use</p>
              <p className={classes.link}>API Terms of Use</p>
              <p className={classes.link}>Privacy Policy</p>
              <p className={classes.link}>System Status</p>
            </div>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
