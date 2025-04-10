import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState(() => {
    const stored = localStorage.getItem("todos");
    return stored ? JSON.parse(stored) : [];
  });

  const [input, setInput] = useState("");
  const [reminder, setReminder] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      todos.forEach((todo) => {
        if (
          todo.reminder &&
          !todo.completed &&
          new Date(todo.reminder) <= now &&
          !todo.notified
        ) {
          alert(`⏰ Reminder: ${todo.text}`);
          const audio = new Audio("/public/reminder.mp3");
          audio.play();

          setTodos((prev) =>
            prev.map((t) =>
              t.id === todo.id ? { ...t, notified: true } : t
            )
          );
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [todos]);

  const addTodo = () => {
    if (!input.trim()) return;
    const newTodo = {
      id: Date.now(),
      text: input.trim(),
      completed: false,
      reminder: reminder || null,
      notified: false,
    };
    setTodos([newTodo, ...todos]);
    setInput("");
    setReminder("");
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-6 sm:px-6 lg:px-8 transition-all">
      <div className="max-w-2xl mx-auto">
        <Header />
        <TodoInput
          value={input}
          onChange={setInput}
          onAdd={addTodo}
          reminder={reminder}
          onReminderChange={setReminder}
        />
        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      </div>
    </div>
  );
};

export default App;
