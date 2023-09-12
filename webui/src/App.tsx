import { 
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Home from './pages/Home';
import ErrorPage from './pages/errorPage';
import Cart from './pages/cart/Cart';

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
  }
]);

  return (
      <RouterProvider router={router} />
  )
}

export default App
