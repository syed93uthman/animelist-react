import { fetchAnimeDetails } from '../services/animeApi';

// Simple utility functions for card navigation

// Basic click handler for card navigation
export const handleAnimeCardClick = async (mal_id: number) => {
  try {
    const animeDetails = await fetchAnimeDetails(mal_id);
    
    // Log the data (you can modify this to handle navigation)
    console.log('Clicked anime:', animeDetails);
    
    // You can add your navigation logic here:
    // - Open a modal with details
    // - Navigate to a details page
    // - Update state to show details
    
    return animeDetails;
    
  } catch (error) {
    console.error('Failed to load anime details:', error);
    alert('Failed to load anime details. Please try again.');
    return null;
  }
};

// Quick navigation function with loading indicator
export const navigateWithLoading = async (
  mal_id: number, 
  onLoadingStart?: () => void,
  onLoadingEnd?: () => void,
  onSuccess?: (data: any) => void,
  onError?: (error: string) => void
) => {
  try {
    onLoadingStart?.();
    
    const animeDetails = await fetchAnimeDetails(mal_id);
    
    onSuccess?.(animeDetails);
    return animeDetails;
    
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to load anime details';
    onError?.(errorMessage);
    return null;
    
  } finally {
    onLoadingEnd?.();
  }
};

// Export the main API function for direct use
export { fetchAnimeDetails };