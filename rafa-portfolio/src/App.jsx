import { Outlet } from 'react-router-dom';
import Navigation from './components/NavLinks';

import Header from './components/Header';
import Footer from './components/Footer';

import './App.css'

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}

export default App
