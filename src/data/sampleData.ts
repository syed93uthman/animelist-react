import { CardData } from '../components/Card';

// Generate sample card data
export const generateAnimeCards = (count: number): CardData[] => {
  const cards: CardData[] = [];

  // Fallback data for anime-themed cards
  const animeTitles = [
    "Attack on Titan",
    "Demon Slayer",
    "My Hero Academia",
    "One Piece",
    "Naruto",
    "Dragon Ball Z",
    "Death Note",
    "Fullmetal Alchemist",
    "One Punch Man",
    "Jujutsu Kaisen",
    "Tokyo Revengers",
    "Chainsaw Man",
    "Spy x Family",
    "Mob Psycho 100",
    "Hunter x Hunter",
    "Bleach",
    "JoJo's Bizarre Adventure",
    "Cowboy Bebop",
    "Evangelion",
    "Studio Ghibli Collection",
    "Violet Evergarden",
    "Your Name",
    "Spirited Away",
    "Princess Mononoke",
    "Akira"
  ];

  const descriptions = [
    "Epic adventure in a world of giants",
    "Breathtaking animation and storytelling",
    "Heroes rising to meet their destiny",
    "Classic anime with timeless appeal",
    "Action-packed with incredible characters",
    "Legendary series that defined anime",
    "Mind-bending psychological thriller",
    "Perfect blend of action and emotion",
    "Comedy meets superhero action",
    "Modern masterpiece of animation",
    "Time travel meets gang warfare",
    "Dark humor and intense action",
    "Heartwarming family comedy",
    "Supernatural powers and growth",
    "Adventure and friendship at its best"
  ];

  const imageUrls = [
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1594736797933-d0401ba0ad81?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1493692092095-b0c6b3556077?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1619377834153-ad6c03bbe6ea?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1594736797933-d0401ba0ad81?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1493692092095-b0c6b3556077?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1619377834153-ad6c03bbe6ea?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1594736797933-d0401ba0ad81?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=400&h=300&fit=crop"
  ];

  for (let i = 1; i <= count; i++) {
    const titleIndex = (i - 1) % animeTitles.length;
    const descIndex = (i - 1) % descriptions.length;
    const imageIndex = (i - 1) % imageUrls.length;
    
    cards.push({
      id: i,
      title: animeTitles[titleIndex],
      description: descriptions[descIndex],
      imageUrl: imageUrls[imageIndex]
    });
  }
  return cards;
}

// Generate sample card data
export const generateSampleCards = (count: number): CardData[] => {
  const cards: CardData[] = [];
  
  const sampleTitles = [
    "Getting Started with React",
    "Advanced TypeScript Patterns",
    "State Management with Redux",
    "Building Responsive Layouts",
    "API Integration Best Practices",
    "Testing React Components",
    "Performance Optimization",
    "Modern CSS Techniques",
    "JavaScript ES6+ Features",
    "React Hooks Deep Dive",
    "Async Programming Mastery",
    "Database Design Principles",
    "Web Security Fundamentals",
    "DevOps for Frontend",
    "Mobile-First Development",
    "Progressive Web Apps",
    "Microservices Architecture",
    "Data Visualization",
    "Machine Learning Basics",
    "Cloud Computing Overview",
    "Agile Development Methods",
    "Code Review Guidelines",
    "Version Control Strategies",
    "Debugging Techniques",
    "Algorithm Fundamentals"
  ];

  const sampleImages = [
    "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1581276879432-15e50529f34b?w=400&h=300&fit=crop"
  ];

  const sampleDescriptions = [
    "Learn the fundamentals and best practices",
    "Explore advanced concepts and real-world applications",
    "Master the tools and techniques for modern development",
    "Comprehensive guide with practical examples",
    "Step-by-step tutorial with hands-on exercises",
    "Industry insights and professional tips",
    "Complete reference with detailed explanations",
    "Beginner-friendly introduction to core concepts",
    "Advanced techniques for experienced developers",
    "Best practices and common pitfalls to avoid"
  ];

  for (let i = 1; i <= count; i++) {
    const titleIndex = (i - 1) % sampleTitles.length;
    const descIndex = (i - 1) % sampleDescriptions.length;
    
    cards.push({
      id: i,
      title: `${sampleTitles[titleIndex]} ${i > sampleTitles.length ? `(Part ${Math.ceil(i / sampleTitles.length)})` : ''}`,
      imageUrl: sampleImages[(i - 1) % sampleImages.length],
      description: sampleDescriptions[descIndex]
    });
  }

  return cards;
};