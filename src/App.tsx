import React from 'react';
import './App.css';
import CardList from './components/CardList';
import { generateSampleCards } from './data/sampleData';

function App() {
  // Generate 100 sample cards to demonstrate pagination
  const sampleCards = generateSampleCards(25);

  return (
    <div className="App">
      <CardList cards={sampleCards} cardsPerPage={25} />
    </div>
  );
}

export default App;
