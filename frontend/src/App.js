// React:
import React, { useState, useEffect } from 'react';

// Components:
import Posts from './components/Posts';
import Pagination from './components/Pagination';

// Others:
import axios from 'axios';
import { Container } from 'reactstrap';

// Style:
import './style.css';

// App:
const App = () => {
  
  // State props:
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  // Component did mount:
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const posts = await axios.get(`
        https://jsonplaceholder.typicode.com/posts
      `);
      setPosts(posts.data);
      setLoading(false);
    }
    fetchPosts();
  }, []);

  // Get current post:
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  
  // Change page:
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <Container className="text-center">
      <h1 className="text-primary mb-3 mt-3">Simple Pagination "Component"</h1>
      <Posts posts={currentPosts} loading={loading}/>
      <Pagination 
        postsPerPage={postsPerPage} 
        totalPosts={posts.length} 
        paginate={paginate}
      />
    </Container>
  );
}

// Exporting App:
export default App;