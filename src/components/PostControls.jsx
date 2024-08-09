import React from 'react';

const PostControls = ({ itemsPerPage, sortBy, onItemsPerPageChange, onSortChange, onPageChange }) => {
    return (
        <div className="post-controls">
            <div className="showing-info">
                <span>Showing 1 - {itemsPerPage} of 100</span>
            </div>
            
            <div className="control-group">
                <label htmlFor="itemsPerPage">Show per page:</label>
                <select id="itemsPerPage" value={itemsPerPage} onChange={onItemsPerPageChange}>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                </select>
                <label htmlFor="sort">Sort by:</label>
                <select id="sort" value={sortBy} onChange={onSortChange}>
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                </select>
            </div>
            
        </div>
    );
};

export default PostControls;
