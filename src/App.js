import './App.css';
import Header from './Component/Header';
import Body from './Component/Body';
import Footer from './Component/Footer';
import RestaurantMenu from './Component/RestaurantMenu'
import { BrowserRouter, createBrowserRouter, Outlet } from 'react-router-dom';
import AllRoutes from './AllRoutes';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Cart from './Pages/Cart';
import Error from './Pages/Error'

function App() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        path: '/',
        element: <Body/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/cart',
        element: <Cart/>
      },
      {
        path: '/restaurant/:id',
        element: <RestaurantMenu/>
      },
    ]
  },
  
])

export default App;
