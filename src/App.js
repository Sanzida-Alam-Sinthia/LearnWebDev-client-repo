import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes';
import { Toaster } from 'react-hot-toast';
import ToggleTheme from './Pages/Shared/ToggleTheme/ToggleTheme';
import Footer from './Pages/Home/footer/Footer';

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
      <Toaster></Toaster>


    </div>
  );
}

export default App;
