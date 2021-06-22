import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Tweets from './Tweets';
export default function App() {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  React.useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);
  console.log('Store: ', store);
  return (
    <div className='container'>
      <span>Redux Course Curriculum</span>
      <Tweets />
    </div>
  );
}
