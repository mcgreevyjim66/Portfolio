// Import the useRouteError hook from react-router-dom
import { useRouteError } from 'react-router-dom';

// Define the ErrorPage component
export default function ErrorPage() {
  // Get the route error object using the useRouteError hook
  const error = useRouteError();

  // Log the error object to the console for debugging purposes
  console.error(error);

  // Return the ErrorPage component with the following content:
  return (
    <div id="error-page">
     
      <h1>Oops!</h1>

     
      <p>Sorry, an unexpected error has occurred.</p>

   
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

