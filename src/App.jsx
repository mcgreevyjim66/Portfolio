import './App.css';


import { Outlet } from 'react-router-dom';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

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