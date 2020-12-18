import React, { useState, useEffect } from 'react';
import PostCard from '../post-card/';
import { Flex, Heading, Grid } from 'ucc-design-system';
import axios from 'axios';

const PostList = () => {
  const [ posts, setPosts ] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get('http://localhost:4002/posts');

    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Flex flexDirection="column" ml={4} mr={4} mt={4}>
      <Heading>Posts</Heading>
      <Grid
        gridTemplateColumns={"repeat(auto-fit, minmax(40vw, 1fr))"}
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
