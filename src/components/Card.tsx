import React from 'react';
import './Card.css';

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
    return (
        <div className="card">
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