import React from 'react';
import './bootstrap.min.css'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import {Container} from "react-bootstrap"
import Header from './components/Header';
import HomeScreen from './components/HomeScreen';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <>
    <Router>
      <Header/>
      <Container>
        <Routes>
          <Route exact path="/" element={<HomeScreen/>}/>
          <Route exact path="/about" element={<About/>}  />
        </Routes>
      </Container>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
