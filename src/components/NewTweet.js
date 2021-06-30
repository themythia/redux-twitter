import React from 'react';
import { useDispatch } from 'react-redux';
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
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`What's happening?`}
        />
        <button class='submit-button' type='submit'>
          Submit
        </button>
      </form>
    </React.Fragment>
  );
};
export default NewTweet;
