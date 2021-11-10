import React from 'react';

const Todo = ({ todo, completeTodo, deleteTodo }) => {
  const doneInfo = (
    <>
      <span>This todo is done</span>
      <span>
        <button onClick={deleteTodo(todo)}> Delete </button>
      </span>
    </>
  );

  const notDoneInfo = (
    <>
      <span>
        This todo is not done
      </span>
      <span>
        <button onClick={deleteTodo(todo)}> Delete </button>
        <button onClick={completeTodo(todo)}> Set as done </button>
      </span>
    </>
  );

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '70%', margin: 'auto' }}>
      <span>
        {todo.text}
      </span>
      {todo.done ? doneInfo : notDoneInfo}
    </div>
  );
};

export default Todo