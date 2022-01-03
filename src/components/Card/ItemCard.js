import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import classes from './ItemCard.module.css';

const ItemCard = (props) => {
  const { item } = props;
  const imageBseUrl = useMemo(
    () => 'https://www.themoviedb.org/t/p/w220_and_h330_face',
    []
  );
  const img = `${imageBseUrl}${item.poster_path || item.profile_path}`;
  console.log('item', item);
  return (
    <Card className={classes.root}>
      <Link to={`${props.link}/${item.id}`} className={classes.link}>
        <CardActionArea>
          <CardMedia className={classes.media} image={img} alt={item.title} />
          <CardContent>
            <h2>{item.name || item.title}</h2>
            <Typography variant='body2' color='textSecondary' component='p'>
              {item.first_air_date || item.release_date}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              {item.vote_average}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default ItemCard;
