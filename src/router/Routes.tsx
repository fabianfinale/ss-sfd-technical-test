import Home from '../components/Home/Home';
import PostItem from '../components/PostItem/PostItem';
import PostsList from '../components/PostsList/PostsList';
import UserDetails from '../components/UserDetails/UserDetails';

export const routes = [
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/',
        element: <PostsList />,
      },
      {
        path: '/posts/:id',
        element: <PostItem />,
      },

      {
        path: '/users/:id',
        element: <UserDetails />,
      },
    ],
  },
];
