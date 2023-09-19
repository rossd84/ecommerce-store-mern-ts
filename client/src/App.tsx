import { useState } from 'react'
import { 
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Home from '@pages/Home';
import ErrorPage from '@pages/Error';
import Cart from '@pages/Cart';
import AdminPage from '@pages/Admin';
import ShopPage from '@pages/Products';
import { CartContext } from './context/CartContext';
import PageLayout from '@components/layouts/Page';

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cart, setCart] = useState([]);

  const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout><Home /></PageLayout>,
    errorElement: <ErrorPage />
  },
  {
    path: "/cart",
    element: <PageLayout><Cart /></PageLayout>
  },
  {
    path: "/admin",
    element: <PageLayout><AdminPage /></PageLayout>
  },
  {
    path: "/shop",
    element: <PageLayout><ShopPage /></PageLayout>
  }
]);

  return (
    <CartContext.Provider value={cart}>
        <RouterProvider router={router} />
    </CartContext.Provider>
  )
}

export default App
