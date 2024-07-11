
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './Components/Home';
import MealPage from './Components/MealPage';

const Root = () => (
  <div>
    <Navbar />
    <Outlet />
  </div>
);

const Home = () => <HomePage />;

const Meals = () => <MealPage />;

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'meals',
        element: <Meals />,
      },
    ],
  },
]);

function App() {
  return (
    
    <RouterProvider router={appRouter} />
  );
}

export default App;
