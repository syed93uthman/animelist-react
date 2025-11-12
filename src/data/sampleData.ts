import { CardData } from '../components/Card';

// Generate sample card data
export const generateAnimeCards = (count: number): CardData[] => {
  const cards: CardData[] = [];

  let animeTitles = [];
  let descriptions = [];
  let imageUrls = [];

  for (let i = 1; i <= count; i++) {
    cards.push({
      id: i,
      title: `Anime Title ${i}`,
      description: `Description for Anime Title ${i}`,
      imageUrl: `https://example.com/anime${i}.jpg`
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