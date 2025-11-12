import React, { useState, useMemo } from 'react';
import Card, { CardData } from './Card';
import Pagination from './Pagination';
import './CardList.css';

interface CardListProps {
    cards: CardData[];
    cardsPerPage?: number;
    onCardClick?: (animeId: number) => void;
}

const CardList: React.FC<CardListProps> = ({ cards, cardsPerPage = 25, onCardClick }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(cards.length / cardsPerPage);

    const currentCards = useMemo(() => {
        const startIndex = (currentPage - 1) * cardsPerPage;
        const endIndex = startIndex + cardsPerPage;
        return cards.slice(startIndex, endIndex);
    }, [cards, currentPage, cardsPerPage]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        // Scroll to top when page changes
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="card-list-container">
            <div className="card-list-header">
                <h2>Card Collection</h2>
                <p className="card-count">
                    Showing {currentCards.length} of {cards.length} cards
                    {totalPages > 1 && ` (Page ${currentPage} of ${totalPages})`}
                </p>
            </div>

            <div className="card-grid">
                {currentCards.map((card) => (
                    <Card
                        key={card.id}
                        card={card}
                        onClick={onCardClick ? () => onCardClick(card.id) : undefined}
                    />
                ))}
            </div>

            {totalPages > 1 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            )}
        </div>
    );
};

export default CardList;