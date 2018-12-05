import React from 'react';
import TodoList from './todo_list';

class TodoListItem extends React.Component {
  render() {
    return(
      <li>{this.props.todo.title}</li>
    );
  }

}

export default TodoListItem;
