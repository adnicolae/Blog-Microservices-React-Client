import React from 'react';
import { FormInput, Text, Input, Button, Heading, Flex } from 'ucc-design-system';

const CreatePost = () => {
  return (
    <Flex ml={4} mt={4} flexDirection="column">
      <Heading>Create Post</Heading> 
      <form>
        <FormInput.Field width="40vw">
          <Text as="label" type="label" htmlFor="post-title">
            Title
          </Text>
          <Input id="post-title" placeholder="Post title" />
          <Button width="30%">Submit</Button>
        </FormInput.Field>
      </form>
    </Flex>
  )
}

export default CreatePost;