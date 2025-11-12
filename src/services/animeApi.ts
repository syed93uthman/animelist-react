import { CardData } from '../components/Card';

export interface JikanAnimeRecommendation {
  entry: {
    mal_id: number;
    title: string;
    images: {
      jpg?: {
        image_url?: string;
        large_image_url?: string;
      };
      webp?: {
        image_url?: string;
        large_image_url?: string;
      };
    };
  };
  votes: number;
}

export interface JikanResponse {
  data: JikanAnimeRecommendation[];
}

export const fetchAnimeRecommendations = async (): Promise<CardData[]> => {
  try {
    // Add a small delay to respect API rate limits
    const response = await fetch('https://api.jikan.moe/v4/anime/1/recommendations');
    
    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }
    
    const data: JikanResponse = await response.json();
    
    if (!data.data || data.data.length === 0) {
      throw new Error('No recommendations found');
    }
    
    // Transform API data to our CardData format
    const cards: CardData[] = data.data.map((item, index) => ({
      id: item.entry.mal_id || index + 1,
      title: item.entry.title || 'Unknown Anime',
      description: `Recommended anime with ${item.votes} votes`,
      imageUrl: getImageUrl(item.entry.images)
    }));
    
    return cards;
    
  } catch (error) {
    console.error('Error fetching anime recommendations:', error);
    throw error;
  }
};

// Helper function to get the best available image URL
const getImageUrl = (images: JikanAnimeRecommendation['entry']['images']): string => {
  // Priority: webp large > webp small > jpg large > jpg small > placeholder
  if (images?.webp?.large_image_url) return images.webp.large_image_url;
  if (images?.webp?.image_url) return images.webp.image_url;
  if (images?.jpg?.large_image_url) return images.jpg.large_image_url;
  if (images?.jpg?.image_url) return images.jpg.image_url;
  
  return 'https://via.placeholder.com/400x300/007bff/ffffff?text=No+Image';
};

// Fallback data in case API fails
export const getFallbackAnimeData = (): CardData[] => [
  {
    id: 1,
    title: "Attack on Titan",
    description: "Epic adventure in a world of giants",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    title: "Demon Slayer",
    description: "Breathtaking animation and storytelling", 
    imageUrl: "https://images.unsplash.com/photo-1594736797933-d0401ba0ad81?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    title: "My Hero Academia",
    description: "Heroes rising to meet their destiny",
    imageUrl: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    title: "One Piece",
    description: "Classic anime with timeless appeal",
    imageUrl: "https://images.unsplash.com/photo-1493692092095-b0c6b3556077?w=400&h=300&fit=crop"
  },
  {
    id: 5,
    title: "Naruto",
    description: "Action-packed with incredible characters",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
  }
];

// Interface for detailed anime information
export interface AnimeDetails {
  mal_id: number;
  title: string;
  title_english?: string;
  title_japanese?: string;
  synopsis?: string;
  score?: number;
  scored_by?: number;
  rank?: number;
  popularity?: number;
  episodes?: number;
  duration?: string;
  rating?: string;
  status?: string;
  year?: number;
  season?: string;
  source?: string;
  genres?: Array<{
    mal_id: number;
    name: string;
  }>;
  studios?: Array<{
    mal_id: number;
    name: string;
  }>;
  producers?: Array<{
    mal_id: number;
    name: string;
  }>;
  images: {
    jpg?: {
      image_url?: string;
      large_image_url?: string;
    };
    webp?: {
      image_url?: string;
      large_image_url?: string;
    };
  };
  trailer?: {
    youtube_id?: string;
    url?: string;
  };
  background?: string;
  broadcast?: {
    day?: string;
    time?: string;
    timezone?: string;
    string?: string;
  };
}

// Fetch anime details by MAL ID
export const fetchAnimeDetails = async (mal_id: number): Promise<AnimeDetails> => {
  try {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${mal_id}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch anime details. Status: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (!data.data) {
      throw new Error('No anime data found');
    }
    
    return data.data;
    
  } catch (error) {
    console.error(`Error fetching anime details for ID ${mal_id}:`, error);
    throw error;
  }
};