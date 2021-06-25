import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Tweets from './Tweets';
import TweetPage from './TweetPage';
import NewTweet from './NewTweet';
import Nav from './Nav';
export default function App() {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  React.useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);
  console.log('Store: ', store);
  return (
    <Router>
      <div className='container'>
        <Nav />
        <Route path='/' exact>
          <Tweets />
        </Route>
        <Route path='/tweet/:id'>
          <TweetPage />
        </Route>
        <Route path='/new'>
          <NewTweet />
        </Route>
      </div>
    </Router>
  );
}
