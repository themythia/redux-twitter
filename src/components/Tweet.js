import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaReply, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { handleToggleLike } from '../actions/tweets';
const Tweet = ({ id }) => {
  const tweets = useSelector((store) => store.tweets);
  const users = useSelector((store) => store.users);
  const authedUser = useSelector((store) => store.authedUser);
  const dispatch = useDispatch();
  const tweet = tweets[id];

  const getDate = (num) => {
    const dateObj = new Date(num);
    return dateObj.toLocaleString();
  };
  const handleLikes = (e) => {
    e.preventDefault();
    const hasLiked = tweet.likes.includes(authedUser) ? true : false;
    dispatch(handleToggleLike(id, authedUser, hasLiked));
    console.log(hasLiked);
    console.log('likes: ', tweet.likes);
  };
  return (
    <React.Fragment>
      {Object.keys(users).length !== 0 && (
        <Link to={`/tweet/${id}`}>
          <div className='tweet'>
            <img
              src={users[tweet.author].avatarURL}
              alt='Avatar'
              className='avatar'
            />
            <div className='tweet-right'>
              <p className='tweet-name'>{users[tweet.author].name}</p>
              <p className='tweet-date text-faded'>
                {getDate(tweet.timestamp)}
              </p>
              {tweet.replyingTo !== null && (
                <p className='tweet-replyingTo text-faded'>
                  Replying to @{tweets[tweet.replyingTo].author}
                </p>
              )}
              <p className='tweet-text'>{tweet.text}</p>
              <div className='tweet-right-bottom'>
                <div className='tweet-replies'>
                  <FaReply className='tweet-reply-button' />
                  <span>{tweet.replies.length}</span>
                </div>
                <div className='tweet-likes'>
                  <FaHeart
                    className='tweet-like-button'
                    onClick={handleLikes}
                    style={
                      tweet.likes.includes(authedUser)
                        ? { color: 'pink' }
                        : { color: 'white' }
                    }
                  />
                  <span>{tweet.likes.length}</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      )}
    </React.Fragment>
  );
};
export default Tweet;
