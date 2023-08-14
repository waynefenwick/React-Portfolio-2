import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PortfolioSection from './PortfolioSection'; // Import your PortfolioSection component
import './styles.css'; // Import your global styles

const App = () => {
  return (
    <div>
      <Header />

      {/* Render each portfolio section individually */}
      <PortfolioSection imageClassName="password-generator" />
      <PortfolioSection imageClassName="guess-game" />
      <PortfolioSection imageClassName="coding-quizz" />
      <PortfolioSection imageClassName="weather" />
      <PortfolioSection imageClassName="bookshare" />
      <PortfolioSection imageClassName="movie-reviews" />

      <Footer />
    </div>
  );
};

export default App;


