import { useState } from 'react';
import { fetchAnimeDetails } from '../services/animeApi';

// Custom hook for handling anime navigation
export const useAnimeNavigation = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigateToAnime = async (mal_id: number) => {
    try {
      setLoading(true);
      setError(null);
      
      const animeDetails = await fetchAnimeDetails(mal_id);
      
      // You can modify this to handle navigation as needed
      // For example: navigate to details page, open modal, etc.
      console.log('Anime details loaded:', animeDetails);
      
      return animeDetails;
      
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to load anime details';
      setError(errorMessage);
      console.error('Navigation error:', errorMessage);
      return null;
      
    } finally {
      setLoading(false);
    }
  };

  return {
    navigateToAnime,
    loading,
    error
  };
};

// Example usage in your Card component:
/*
import { useAnimeNavigation } from '../hooks/useAnimeNavigation';

const Card = ({ card }) => {
  const { navigateToAnime, loading } = useAnimeNavigation();
  
  const handleClick = () => {
    navigateToAnime(card.id); // card.id should be the MAL ID
  };
  
  return (
    <div className="card" onClick={handleClick}>
      // ... rest of your card content
    </div>
  );
};
*/