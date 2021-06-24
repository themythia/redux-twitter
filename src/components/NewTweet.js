import React from 'react';
import { dispatch, useDispatch } from 'react-redux';
import { handleAddTweet } from '../actions/tweets';

const NewTweet = ({ id }) => {
  const [input, setInput] = React.useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleAddTweet(input, id));
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={`What's happening?`}
      />
      <button type='submit'>Submit</button>
    </form>
  );
};
export default NewTweet;
