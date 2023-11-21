
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Bringing in the pages the router will use to conditionally show the appropriate views
import App from './App';
import ErrorPage from '../src/components/pages/ErrorPage';
import HomePage from '../src/components/pages/About';
import PortfolioPage from '../src/components/pages/Portfolio';
import ContactPage from '../src/components/pages/Contact';
import ResumePage from '../src/components/pages/Resume';
import AboutPage from '../src/components/pages/About';

const router = createBrowserRouter([

  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/About',
        element: <AboutPage />,
      },
      {
        path: '/Portfolio',
        element: <PortfolioPage />,
      },
      {
        path: '/Contact',
        element: <ContactPage />,
      },
      {
        path: '/Resume',
        element: <ResumePage />,
      },

    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
