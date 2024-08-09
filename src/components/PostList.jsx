import PropTypes from 'prop-types';

const PostList = ({ posts }) => {
    if (!Array.isArray(posts)) {
        return <div>Loading...</div>;
    }

    return (
        <div className="post-list">
            {posts.map(post => (
                <div key={post.id} className="post-item">
                    {post.medium_image.length > 0 ? (
                        <img src={post.medium_image[0].url} alt={post.title} />
                    ) : (
                        <p>No image available</p>
                    )}
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                </div>
            ))}
        </div>
    );
};

PostList.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            medium_image: PropTypes.arrayOf(
                PropTypes.shape({
                    url: PropTypes.string.isRequired
                })
            ).isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired
        })
    )
};

export default PostList;
