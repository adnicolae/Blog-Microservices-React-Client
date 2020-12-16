import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentItem from '../comment-item';
import { Flex, Heading } from 'ucc-design-system';

const CommentList = ({ postId }) => {
  const [ comments, setComments ] = useState([]);

  const fetchComments = async () => {
    const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);

    setComments(res.data);
  }

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <Flex flexDirection="column">
      <Heading type="h3">Comments</Heading>
      <ul>
        {
          comments
            .map(comment => (
              <CommentItem key={ comment.id } comment={ comment } />
            ))
        }
      </ul>
    </Flex>
  );
}

export default CommentList;