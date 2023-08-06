import React from 'react';
import './styles.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Content />
      <Footer />
    </div>
  );
}

export default App;

