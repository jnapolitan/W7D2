import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions';
import merge from 'lodash/merge';

const todosReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = {};
  switch(action.type) {
    case RECEIVE_TODOS:
      action.todos.forEach((todo) => {
        nextState[todo.id] = todo;
      });
      return nextState;
    case RECEIVE_TODO:
      nextState = merge({}, state);
      nextState[action.todo.id] = action.todo;
      return nextState;
    default:
      return state;
  }
};

export default todosReducer;
