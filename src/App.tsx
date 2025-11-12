import React, { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/CardList';
import AnimeDetailsPage from './components/AnimeDetailsPage';
import { CardData } from './components/Card';
import { fetchAnimeRecommendations, getFallbackAnimeData } from './services/animeApi';

function App() {
  const [animeCards, setAnimeCards] = useState<CardData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedAnimeId, setSelectedAnimeId] = useState<number | null>(null);

  const handleCardClick = (animeId: number) => {
    setSelectedAnimeId(animeId);
  };

  const handleBackToList = () => {
    setSelectedAnimeId(null);
  };

  const loadRecommendations = async () => {
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

  useEffect(() => {
    loadRecommendations();
  }, []);

  // Show anime details page if an anime is selected
  if (selectedAnimeId) {
    return (
      <AnimeDetailsPage
        animeId={selectedAnimeId}
        onBack={handleBackToList}
      />
    );
  }

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
        <h1>Anime Database</h1>
        <p>Powered by Jikan API - Click any card to view details</p>
        <div className="header-controls">
          <button
            onClick={loadRecommendations}
            className="header-btn"
            disabled={loading}
          >
            Reload Recommendations
          </button>
        </div>
      </div>

      <div className="results-section">
        <h2>
          Anime Recommendations ({animeCards.length} items)
        </h2>
        <CardList cards={animeCards} cardsPerPage={25} onCardClick={handleCardClick} />
      </div>
    </div>
  );
}

export default App;
