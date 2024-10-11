import { Fragment } from 'react';
import './App.css';
import Navbars from './Component/Nav/Navbar';
import Home from './Pages/Home';
import Footer from './Component/Footer/Footer';
import ContactButtons from './Component/ContactButtons/ContactButtons';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <Navbars />
      <Home />
      <Footer />
      <ContactButtons />
    </Fragment>
    
  );
}

export default App;
