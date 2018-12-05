import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  render() {
    // debugger;
    return(
      <div>
      <h2>Add todo:</h2>
        <form method="POST" onSubmit={this.handleSubmit}>
          <label>Title
          <input type="text" name="title" value={this.state.title} onChange={this.update('title')} />
          </label>
          <br />
          <label>Body
          <input type="text" name="body" value={this.state.body} onChange={this.update('body')} />
          </label>
          <br />
          <button type="submit">Add todo</button>
        </form>
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      title: this.state.title,
      body: this.state.body,
      id: new Date().getTime(),
      done: false
    };

    this.props.receiveTodo(newTodo);
    this.setState({title: '', body: ''});
  }

  update(attr) {
    return (e) => {
        this.setState({[attr]: e.target.value});
    };
  }
}

export default TodoForm;
