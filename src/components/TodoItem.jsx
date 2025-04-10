import React from "react";
import { CheckCircle, Circle, Trash2, AlarmClock } from "lucide-react";

const TodoItem = ({ todo, onToggle, onDelete }) => {
  const reminderFormatted = todo.reminder
    ? new Date(todo.reminder).toLocaleString()
    : null;

  return (
    <div
      className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4 p-4 mb-4 rounded-xl border shadow-sm transition-all duration-300 ${
        todo.completed
          ? "bg-green-50 dark:bg-green-900 border-green-300 dark:border-green-700"
          : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
      }`}
    >
      <div className="flex items-start gap-3 w-full">
        <button onClick={() => onToggle(todo.id)}>
          {todo.completed ? (
            <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
          ) : (
            <Circle className="text-gray-400 dark:text-gray-500 w-5 h-5 mt-1" />
          )}
        </button>
        <div className="flex-1">
          <p
            className={`text-lg font-medium break-words ${
              todo.completed ? "line-through text-gray-400" : "text-gray-900 dark:text-white"
            }`}
          >
            {todo.text}
          </p>
          {reminderFormatted && (
            <div className="flex items-center gap-2 mt-1 text-sm text-pink-500 dark:text-pink-400">
              <AlarmClock className="w-4 h-4" />
              <span>{reminderFormatted}</span>
            </div>
          )}
        </div>
      </div>

      <button
        onClick={() => onDelete(todo.id)}
        className="text-red-500 hover:text-red-600 transition"
        aria-label="Delete task"
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  );
};

export default TodoItem;
