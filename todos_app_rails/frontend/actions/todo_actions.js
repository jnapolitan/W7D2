import * as TodoAPIUtil from '../../utils/todo_api_util';

export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';

export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos: todos
});

export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo: todo
});

export const fetchTodos = () => (dispatch, getState) => {
  return TodoAPIUtil.fetchTodos()
    .then((allTodos) => dispatch(receiveTodos(allTodos)));
};

export const createTodos = (todo) => (dispatch, getState) => {
  return TodoAPIUtil.createTodo(todo)
    .then((todo) => dispatch(receiveTodo(todo)));
};
