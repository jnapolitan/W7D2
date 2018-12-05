import React from "react";
import ToDoListContainer from './todo_list_container';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  render() {
    const { todos } = this.props;
    return(
      <div>
        <ul>
          {todos.map((todo) => {
            return <TodoListItem todo={todo} key={todo.id} />;
          })
        }
        </ul>
        <TodoForm receiveTodo = {this.props.receiveTodo} />
      </div>
    );
  }
}

export default TodoList;
