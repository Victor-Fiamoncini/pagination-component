// React:
import React from 'react';

// Others:
import { ListGroup, ListGroupItem } from 'reactstrap';

// Posts:
const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>loading...</h2>;
  }

  return (
    <ListGroup className="text-left">
      {posts.map(post => (
        <ListGroupItem key={post.id}>
          {post.title}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}

// Exporting Post:
export default Posts;