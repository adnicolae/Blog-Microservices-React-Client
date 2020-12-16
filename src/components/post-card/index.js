import React from 'react';
import CreateComment from '../create-comment';
import { Text, Box, Heading, Flex } from 'ucc-design-system';
import CommentList from '../comment-list';

const PostCard = ({ post: { id, title, body } }) => {
  return (
    <Box
      flexDirection="row"
      variant="shadowed"
    >
      <Flex ml={ 2 } flexDirection="column" p={ 3 }>
        <Heading type="h2">{ title }</Heading>
        <Text mt={2} >{ body }</Text>
        <CreateComment postId={id} />
        <CommentList postId={id} />
      </Flex>
    </Box>
  )
};

export default PostCard;
