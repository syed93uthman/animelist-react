// Example: How to make your Card component clickable for navigation

import React from 'react';
import './Card.css';
import { handleAnimeCardClick } from '../utils/animeNavigation';

export interface CardData {
    id: number;
    title: string;
    description?: string;
    imageUrl?: string;
}

interface CardProps {
    card: CardData;
}

const Card: React.FC<CardProps> = ({ card }) => {
    const handleClick = () => {
        // Simple click handler - logs anime details to console
        handleAnimeCardClick(card.id);

        // You can replace this with your own navigation logic:
        // - Navigate to details page
        // - Open modal
        // - Update parent component state
    };

    return (
        <div className="card clickable" onClick={handleClick}>
            {card.imageUrl && (
                <div className="card-image">
                    <img src={card.imageUrl} alt={card.title} />
                </div>
            )}
            <div className="card-content">
                <div className="card-header">
                    <h3 className="card-title">{card.title}</h3>
                </div>
                {card.description && (
                    <div className="card-body">
                        <p className="card-description">{card.description}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Card;

/* 
Add this CSS to Card.css to show the card is clickable:

.card.clickable {
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card.clickable:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}
*/