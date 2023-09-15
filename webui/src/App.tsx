import { useState } from 'react'
import { 
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Home from './pages/Home';
import ErrorPage from './pages/errorPage';
import Cart from './pages/cart/Cart';
import AdminPage from './pages/admin/AdminPage';
import { CartContext } from './context/CartContext';

function App() {
  const [cart, setCart] = useState([]);

  const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/cart",
    element: <Cart />
  },
  {
    path: "/admin",
    element: <AdminPage />
  }
]);

  return (
    <CartContext.Provider value={cart}>
      <RouterProvider router={router} />
    </CartContext.Provider>
  )
}

export default App
