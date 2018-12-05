import React from 'react';
import allTodos from '../../reducers/selectors';
import { connect } from 'react-redux';
import TodoList from './todo_list';
import { createTodo } from '../../actions/todo_actions'


const mapStateToProps = state => ({
   todos: allTodos(state)
 });

const mapDispatchToProps = dispatch => ({
 receiveTodo: (todo) => dispatch(receiveTodo(todo)),
 createTodo: (todo) => dispatch(createTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
