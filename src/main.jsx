import ReactDOM from 'react-dom/client'; // Importing ReactDOM from 'react-dom/client' for DOM manipulations.

import { createBrowserRouter, RouterProvider} from 'react-router-dom'; // Importing functions from 'react-router-dom' for routing.

import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap's minified CSS for styling.
import './index.css'; // Importing custom CSS file.

// Importing various page components for the application.
import App from './App'; // Main App component.
import ErrorPage from '../src/components/pages/ErrorPage'; // Error page component.
import HomePage from '../src/components/pages/About'; // Home (or About) page component.
import PortfolioPage from '../src/components/pages/Portfolio'; // Portfolio page component.
import ContactPage from '../src/components/pages/Contact'; // Contact page component.
import ResumePage from '../src/components/pages/Resume'; // Resume page component.
import AboutPage from '../src/components/pages/About'; // Another reference to the About page component.

// Creating a router object using createBrowserRouter.
const router = createBrowserRouter([
  {
    path: '/', // Root route.
    element: <App />, // Main application component for the root route.
    errorElement: <ErrorPage/>, // Component to display in case of routing errors.
    children: [
      // Defining child routes.
      {
        index: true, // Default child route (i.e., when no additional path is specified).
        element: <HomePage />, // Component for the home page.
      },
      {
        path: '/About', // Route for the About page.
        element: <AboutPage />, // Component for the About page.
      },
      {
        path: '/Portfolio', // Route for the Portfolio page.
        element: <PortfolioPage />, // Component for the Portfolio page.
      },
      {
        path: '/Contact', // Route for the Contact page.
        element: <ContactPage />, // Component for the Contact page.
      },
      {
        path: '/Resume', // Route for the Resume page.
        element: <ResumePage />, // Component for the Resume page.
      },
    ],
  },
]);

// Rendering the application.
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} /> // Using RouterProvider to provide routing context based on the defined router.
);
