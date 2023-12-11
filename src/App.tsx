import Footer from './components/Footer/Footer';
// import Home from './components/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './router/Routes';

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
