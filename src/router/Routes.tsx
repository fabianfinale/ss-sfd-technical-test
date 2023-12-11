import Home from '../components/Home/Home';
import PostItem from '../components/PostItem/PostItem';
import PostsList from '../components/PostsList/PostsList';

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
    ],
  },
];
