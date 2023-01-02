import { useRoutes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Err from './pages/Error';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
    let element = useRoutes([
      {path: '/', element: <Home />},
      {path: '/about', element: <About />},
      {path: '/error', element: <Err />}
    ]);
  
    return element;
  }