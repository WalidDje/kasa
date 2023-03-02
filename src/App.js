import { useRoutes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Err from './pages/Error';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
    let element = useRoutes([
      {path: '/', element: <Home />},
      {path: '/about', element: <About />},
      {path: '/logement/:appartid', element: <Product />},
      {path: '/*', element: <Err />}
    ]);
  
    return element;
  }