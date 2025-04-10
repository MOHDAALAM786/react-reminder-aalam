import React from "react";

const TodoInput = ({ value, onChange, onAdd, reminder, onReminderChange }) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") onAdd();
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
      <input
        type="text"
        placeholder="What do you want to get done?"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={handleKeyPress}
        className="flex-1 px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-600 transition"
      />

      <input
        type="datetime-local"
        value={reminder}
        onChange={(e) => onReminderChange(e.target.value)}
        className="px-3 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-400 dark:focus:ring-pink-600 transition"
      />

      <button
        onClick={onAdd}
        className="px-5 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-semibold transition-all duration-300 shadow-md"
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;
