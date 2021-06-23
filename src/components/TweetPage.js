import React from 'react';
import { useParams } from 'react-router';
import Tweet from './Tweet';
const TweetPage = () => {
  const { id } = useParams();
  return <Tweet id={id} />;
};
export default TweetPage;
