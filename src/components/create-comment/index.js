import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FormInput, Text, Input, Button, Heading, Flex } from 'ucc-design-system';

const CreateComment = ({ postId }) => {
  const [ content, setContent ] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content
    });

    setContent('');
  }

  return (
    <Flex
      mt={ 4 }
      mb={ 4 }
      alignItems="center"
      justifyContent="center">
      <form onSubmit={onSubmit}>
        <FormInput.Field width={["17rem", "17rem", "17rem", "23rem", "26rem", "30rem", "30rem"]}>
          <Text as="label" type="label" htmlFor="post-comment">
            New Comment
          </Text>
          <Input
            value={ content }
            onChange={ e => setContent(e.target.value) }
            id="post-comment"
            placeholder="New Comment"
          />
          <Button small width={150}>COMMENT</Button>
        </FormInput.Field>
      </form>
    </Flex>
  );
}

export default CreateComment;