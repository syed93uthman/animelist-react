import React, { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/CardList';
import { CardData } from './components/Card';
import { fetchAnimeRecommendations, getFallbackAnimeData } from './services/animeApi';

function App() {
  const [animeCards, setAnimeCards] = useState<CardData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadAnimeData = async () => {
      try {
        setLoading(true);
        setError(null);

        const cards = await fetchAnimeRecommendations();
        setAnimeCards(cards);

      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to fetch anime data';
        setError(errorMessage);

        // Use fallback data when API fails
        setAnimeCards(getFallbackAnimeData());

      } finally {
        setLoading(false);
      }
    };

    loadAnimeData();
  }, []);

  if (loading) {
    return (
      <div className="App">
        <div className="loading-container">
          <h2>Loading anime recommendations...</h2>
          <div className="spinner"></div>
          <p>Fetching data from Jikan API</p>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      {error && (
        <div className="error-banner">
          <p>⚠️ API Error: {error}</p>
          <p>Showing fallback data instead</p>
        </div>
      )}
      <div className="app-header">
        <h1>Anime Recommendations</h1>
        <p>Powered by Jikan API</p>
      </div>
      <CardList cards={animeCards} cardsPerPage={25} />
    </div>
  );
}

export default App;
