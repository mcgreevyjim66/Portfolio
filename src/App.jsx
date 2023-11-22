import './App.css'; // Importing the CSS file for styling the App component.

import { Outlet } from 'react-router-dom'; // Importing Outlet from react-router-dom for nested routing.
import Header from '../src/components/Header'; // Importing the Header component from the components directory.
import Footer from '../src/components/Footer'; // Importing the Footer component from the components directory.

// Defining the App functional component.
function App() {
  return (
    <>
    
      <Header />
      
      <main className="mx-3"> 
        <Outlet />
      </main>
      
      <Footer />

    </>
  );
}

export default App;

