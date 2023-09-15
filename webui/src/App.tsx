import { useState } from 'react'
import { 
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Home from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import Cart from './pages/CartPage';
import AdminPage from './pages/AdminPage';
import { CartContext } from './context/CartContext';

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
