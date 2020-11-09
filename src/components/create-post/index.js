import React, { useState } from 'react';
import { FormInput, Text, Input, Button, Heading, Flex } from 'ucc-design-system';
import axios from 'axios';

const CreatePost = () => {
  const [ title, setTitle ] = useState('');
  const [ body, setBody ] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios.post('http://localhost:4000/posts', {
      title, 
      body
    });

    setTitle('');
  };

  return (
    <Flex ml={4} mt={4} flexDirection="column">
      <Heading>Create Post</Heading> 
      <form onSubmit={onSubmit}>
        <FormInput.Field width={["80vw", "80vw", "80vw", "80vw", "80vw", "40vw"]}>
          <Text as="label" type="label" htmlFor="post-title">
            Title
          </Text>
          <Input 
            value={ title } 
            onChange={ e => setTitle(e.target.value) } 
            id="post-title" 
            placeholder="Post title" 
          />
        </FormInput.Field>
        <FormInput.Field mt={ 2 } width={["80vw", "80vw", "80vw", "80vw", "80vw", "40vw"]}>
          <Text as="label" type="label" htmlFor="post-body">
            Body
          </Text>
          {/* TODO: Update to textarea once available */}
          <Input
            value={ body } 
            onChange={ e => setBody(e.target.value) } 
            id="post-body" 
            placeholder="Post body" 
          />
        </FormInput.Field>
        <Button width={["40vw", "40vw", "30vw", "20vw", "20vw", "20vw"]} mt={2}>Submit</Button>
      </form>
    </Flex>
  )
}

export default CreatePost;