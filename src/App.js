import React from 'react';
import projects from './projectData';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

import './styles.css';

function App() {
  return (
    <div>
      <Header />
      <Content projects={projects} /> {/* Pass projects as a prop */}
      <Footer />
    </div>
  );
}

export default App;

