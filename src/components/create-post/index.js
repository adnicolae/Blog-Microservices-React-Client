import React, { useState } from 'react';
import { FormInput, Text, Input, Button, Heading, Flex } from 'ucc-design-system';
import axios from 'axios';

const CreatePost = () => {
  const [ title, setTitle ] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios.post('http://localhost:4000/posts', {
      title
    });

    setTitle('');
  };

  return (
    <Flex ml={4} mt={4} flexDirection="column">
      <Heading>Create Post</Heading> 
      <form onSubmit={onSubmit}>
        <FormInput.Field width="40vw">
          <Text as="label" type="label" htmlFor="post-title">
            Title
          </Text>
          <Input 
            value={ title } 
            onChange={ e => setTitle(e.target.value) } 
            id="post-title" 
            placeholder="Post title" 
          />
          <Button width="30%">Submit</Button>
        </FormInput.Field>
      </form>
    </Flex>
  )
}

export default CreatePost;