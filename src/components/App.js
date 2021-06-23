import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Tweets from './Tweets';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TweetPage from './TweetPage';
export default function App() {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  React.useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);
  console.log('Store: ', store);
  return (
    <Router>
      <Route exact path='/' component={Tweets} />
      <Route path='/tweet/:id' component={TweetPage} />
    </Router>
  );
}
