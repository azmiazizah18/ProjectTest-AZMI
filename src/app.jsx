import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import PostControls from './components/PostControls';
import PostList from './components/PostList';
import Pagination from './components/Pagination';
import { fetchPosts } from './utils/api';

const App = () => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [sortBy, setSortBy] = useState('-published_at');
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchPosts(currentPage, itemsPerPage, sortBy);
                console.log('API Response:', data); 

                if (data && data.data && data.meta && typeof data.meta.last_page === 'number') {
                    setPosts(data.data);
                    setTotalPages(data.meta.last_page);
                } else {
                    console.error('Unexpected API response structure:', data);
                }
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchData();
    }, [currentPage, itemsPerPage, sortBy]);

    const handleItemsPerPageChange = (event) => {
        setItemsPerPage(parseInt(event.target.value, 10));
        setCurrentPage(1); 
    };

    const handleSortChange = (event) => {
        setSortBy(event.target.value === 'newest' ? '-published_at' : 'published_at');
        setCurrentPage(1); 
    };

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page); 
        }
    };

    return (
        <>
            <Header />
            <Banner />
            <div className="posts">
                <PostControls
                    itemsPerPage={itemsPerPage}
                    sortBy={sortBy}
                    onItemsPerPageChange={handleItemsPerPageChange}
                    onSortChange={handleSortChange}
                />
                <PostList posts={posts} />
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
        </>
    );
};

export default App;
