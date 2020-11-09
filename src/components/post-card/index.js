import React from 'react';
import { Text, Box, Heading, Flex } from 'ucc-design-system';

const PostCard = ({ post: { title, body } }) => {
  return (
    <Box 
      flexDirection="row"
      variant="shadowed"
    >
      <Flex ml={ 2 } flexDirection="column" p={ 3 }>
        <Heading type="h2">{ title }</Heading>
        <Text mt={2}>{ body }</Text>
      </Flex>
    </Box>
  )
};

export default PostCard;
