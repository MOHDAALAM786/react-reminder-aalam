import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onToggle, onDelete }) => {
  if (!todos.length) {
    return (
      <p className="text-center text-gray-500 dark:text-gray-400 mt-10 text-lg">
        🎉 No tasks yet. Add something to get started!
      </p>
    );
  }

  return (
    <div className="space-y-3 mt-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TodoList;
