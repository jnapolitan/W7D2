import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from '../store/store';
import Root from './components/root';
import { receiveTodos } from '../actions/todo_actions';
import { receiveTodo } from '../actions/todo_actions';
import allTodos from '../reducers/selectors';


const store = configureStore;
window.store = store;
window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;
window.allTodos = allTodos;

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Root store={store} />, document.getElementById('root')
  );
});
