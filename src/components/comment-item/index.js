import React from 'react';
import { Text } from 'ucc-design-system';

const CommentItem = ({ comment: { content } }) => {
  return (
    <li>
      <Text>{ content }</Text>
    </li>
  );
}

export default CommentItem;