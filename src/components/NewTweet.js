import React from 'react';
import { useDispatch } from 'react-redux';
import { handleAddTweet } from '../actions/tweets';
import { Redirect } from 'react-router-dom';

const NewTweet = ({ id }) => {
  const [input, setInput] = React.useState('');
  const dispatch = useDispatch();
  const [redirectStatus, setRedirectStatus] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleAddTweet(input, id));
    setInput('');
    console.log('id', id);
    setRedirectStatus(id ? false : true);
  };

  if (redirectStatus) {
    return <Redirect to='/' />;
  }

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`What's happening?`}
        />
        <button className='submit-button' type='submit'>
          Submit
        </button>
      </form>
    </React.Fragment>
  );
};
export default NewTweet;
