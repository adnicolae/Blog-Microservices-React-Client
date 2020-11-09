import React, { useState, useEffect } from 'react';
import PostCard from '../post-card/';
import { Flex, Heading, Grid } from 'ucc-design-system';
import axios from 'axios';

const PostList = () => {
  const [ posts, setPosts ] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get('http://localhost:4000/posts');

    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, [posts]);

  return (
    <Flex flexDirection="column" ml={4} mr={4}>
      <Heading>Posts</Heading>
      <Grid 
        gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]} 
        gridColumnGap={4}
        gridRowGap={3}
      >
        {
          Object.values(posts)
            .map(post => (
              <PostCard key={ post.id } post={ post } />
            ))
        }
      </Grid>
    </Flex>
  )
};

export default PostList;