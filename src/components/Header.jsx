import React from "react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0 mt-6 mb-8 px-4 sm:px-0">
      <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text animate-fade-in">
        🔥 ToDo Reminder by Aalam
      </h1>
      <ThemeToggle />
    </header>
  );
};

export default Header;
