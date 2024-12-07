import './App.css';
import { lazy, Suspense, useState} from 'react';
import {createBrowserRouter, Outlet } from 'react-router-dom';
import Header from './Component/Header';
import Body from './Component/Body';
import Footer from './Component/Footer';
import Restaurant from './Component/Restaurant'
import About from './Pages/About';
import Contact from './Pages/Contact';
import Cart from './Pages/Cart';
import Error from './Pages/Error'
import Shimmer from './Component/Shimmer';
import UserContext from './Utils/UserContext';
import { Provider } from 'react-redux';
import store from './Utils/store';

// Lazy Loading/ Chunking/ Dynamic Bundling/ Code Splitting/ Dynamic Import/ On Demand Import
const InstaMart = lazy(()=> import('./Pages/InstaMart'));

function App() {
  const [user, setUser] = useState({
    user: {
      name: 'nav',
      email: 'nav@gmail.com'
    }
  });
  
  return (
    <Provider store={store}>
      <UserContext.Provider value={{
        user: user,
        setUser: setUser,
      }}>
        <Header/>
        <Outlet/>
        {/* <Footer/> */}
      </UserContext.Provider>
    </Provider>
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
        path: '/instamart',
        element: (
          <Suspense fallback={<Shimmer/>}>  
            <InstaMart/>
          </Suspense>
        )
      },
      {
        path: '/cart',
        element: <Cart/>
      },
      {
        path: '/restaurant/:id',
        element: <Restaurant/>
      },
    ]
  },
  
])

export default App;
