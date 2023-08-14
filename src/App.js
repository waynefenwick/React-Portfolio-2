import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import projects from './projectData'; // Import projects array

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

