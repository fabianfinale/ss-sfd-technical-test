import Home from '../components/Home/Home';
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
    ],
  },
];
