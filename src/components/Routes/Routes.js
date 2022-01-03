import DetailsPage from '../../pages/DetailsPage/DetailsPage';
import Home from '../../pages/Home/Home';
import Movies from '../../pages/Movies/Movies';
import People from '../../pages/People/People';
import TvShows from '../../pages/TvShows/TvShows';

const publicRoutes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/movies',
    component: Movies,
  },
  {
    path: '/people',
    component: People,
  },
  {
    path: '/tv-shows',
    component: TvShows,
  },
  {
    path: '/tv/:id',
    component: DetailsPage,
  },
  {
    path: '/movie/:id',
    component: DetailsPage,
  },
  {
    path: '/person/:id',
    component: DetailsPage,
  },
];

export { publicRoutes };
