import React from 'react';
import CreateComment from '../create-comment';
import { Text, Box, Heading, Flex } from 'ucc-design-system';
import CommentList from '../comment-list';

const PostCard = ({ post: { id, title, body, comments } }) => {
  return (
    <Box
      flexDirection="row"
      variant="shadowed"
    >
      <Flex ml={ 2 } flexDirection="column" p={ 3 }>
        <Heading type="h2">{ title }</Heading>
        <Text mt={2} >{ body }</Text>
        <CreateComment postId={ id } />
        <CommentList comments={ comments } />
      </Flex>
    </Box>
  )
};

export default PostCard;
