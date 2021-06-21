import { RECEIVE_USERS } from '../actions/users';

const users = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...users,
      };
    default:
      return state;
  }
};
export default users;
