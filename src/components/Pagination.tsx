import React from 'react';
import './Pagination.css';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange
}) => {
    const getVisiblePages = () => {
        const visiblePages: (number | string)[] = [];
        const maxVisible = 7;

        if (totalPages <= maxVisible) {
            // Show all pages if total is small
            for (let i = 1; i <= totalPages; i++) {
                visiblePages.push(i);
            }
        } else {
            // Always show first page
            visiblePages.push(1);

            if (currentPage > 4) {
                visiblePages.push('...');
            }

            // Show pages around current page
            const start = Math.max(2, currentPage - 1);
            const end = Math.min(totalPages - 1, currentPage + 1);

            for (let i = start; i <= end; i++) {
                visiblePages.push(i);
            }

            if (currentPage < totalPages - 3) {
                visiblePages.push('...');
            }

            // Always show last page
            if (totalPages > 1) {
                visiblePages.push(totalPages);
            }
        }

        return visiblePages;
    };

    return (
        <div className="pagination">
            <button
                className="pagination-button"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Previous page"
            >
                Previous
            </button>

            <div className="pagination-pages">
                {getVisiblePages().map((page, index) => (
                    <button
                        key={index}
                        className={`pagination-page ${page === currentPage ? 'active' : ''
                            } ${typeof page === 'string' ? 'ellipsis' : ''}`}
                        onClick={() => typeof page === 'number' && onPageChange(page)}
                        disabled={typeof page === 'string'}
                    >
                        {page}
                    </button>
                ))}
            </div>

            <button
                className="pagination-button"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Next page"
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;