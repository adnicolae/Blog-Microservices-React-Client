import React from 'react';
import { Text } from 'ucc-design-system';

const CommentItem = ({ comment: { content, status } }) => {
  const renderComment = () => {
    switch (status) {
      case 'pending':
        return 'Comment is pending moderation.';
      case 'approved':
        return content;
      case 'rejected':
        return 'Comment has been rejected. Please moderate your language.';
    }
  }

  return (
    <li>
      <Text>{ renderComment() }</Text>
    </li>
  );
}

export default CommentItem;