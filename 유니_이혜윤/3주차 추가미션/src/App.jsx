import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Header from './Header'
import Todo from './Todo.jsx'
import Trends from './trends.jsx'
import Footer from './Footer'

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Layout />, 
    children: [
      { index: true, element: <Todo /> },
      { path: "trends", element: <Trends /> },
    ]
  },
]);

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App