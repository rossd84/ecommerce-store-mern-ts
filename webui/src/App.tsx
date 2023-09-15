import { 
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Home from './pages/Home';
import ErrorPage from './pages/errorPage';
import Cart from './pages/cart/Cart';
import AdminPage from './pages/admin/AdminPage';

function App() {

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
      <RouterProvider router={router} />
  )
}

export default App
