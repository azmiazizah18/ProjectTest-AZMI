import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pagesPerRow = 4;
    const totalRows = 2;
    const maxPages = pagesPerRow * totalRows; 

    const startPage = Math.max(1, Math.min(currentPage - Math.floor(maxPages / 2), totalPages - maxPages + 1));
    const endPage = Math.min(totalPages, startPage + maxPages - 1);

    const handlePreviousGroup = () => {
        if (startPage > 1) {
            onPageChange(startPage - maxPages);
        }
    };

    const handleNextGroup = () => {
        if (endPage < totalPages) {
            onPageChange(endPage + 1);
        }
    };

    const handleFirstGroup = () => {
        onPageChange(1);
    };

    const handleLastGroup = () => {
        onPageChange(totalPages);
    };

    return (
        <div className="pagination">
            {/* Tombol geser ke kiri */}
            <button onClick={handleFirstGroup} disabled={currentPage === 1}>««</button>
            <button onClick={handlePreviousGroup} disabled={startPage <= 1}>«</button>

            {/* Tombol Halaman */}
            {[...Array(endPage - startPage + 1).keys()].map(index => {
                const pageNumber = startPage + index;
                return (
                    <button
                        key={pageNumber}
                        onClick={() => onPageChange(pageNumber)}
                        className={pageNumber === currentPage ? 'active' : ''}
                    >
                        {pageNumber}
                    </button>
                );
            })}

            {/* Tombol geser ke kanan */}
            <button onClick={handleNextGroup} disabled={endPage >= totalPages}>»</button>
            <button onClick={handleLastGroup} disabled={currentPage === totalPages}>»»</button>
        </div>
    );
};

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
