import React from 'react';
import CommentItem from '../comment-item';
import { Flex, Heading } from 'ucc-design-system';

const CommentList = ({ comments }) => {
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