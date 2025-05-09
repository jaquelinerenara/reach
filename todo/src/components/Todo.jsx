import React from "react";

/**
 * Renders a single todo item.
 * 
 * @param {Object} props - The component props.
 * @param {Object} props.todo - The todo item.
 * @param {number} props.todo.id - The ID of the todo.
 * @param {string} props.todo.text - The text of the todo.
 * @param {string} props.todo.category - The category of the todo.
 * @param {boolean} props.todo.isCompleted - Whether the todo is completed.
 * @param {Function} props.removeTodo - Function to remove the todo.
 * @param {Function} props.completeTodo - Function to mark the todo as completed.
 * @returns {JSX.Element} The rendered todo component.
 */
export const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div className="todo" style={{ textDecoration: 
    todo.isCompleted ? "line-through" : "" }}>
      <div className="content">
        <p>{todo.text}</p>
        <p className="category">({todo.category})</p>
      </div>
      <div>
        <button className="complete" onClick={() => 
          completeTodo(todo.id)}>Completar</button>
        <button className="remove" onClick={() =>
          removeTodo(todo.id)}>x</button>
      </div>
    </div>
  );
};