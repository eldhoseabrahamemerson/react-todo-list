# React To-Do List

A simple to-do list app built with React and Vite. Add tasks, mark them done, delete them. No frills, no backend — just a clean little project for practicing React state and events.

## Features

- Add a task by typing and clicking **Add Task** (or hitting Enter)
- Mark a task as done — it gets a strikethrough, and you can undo it
- Delete a task you no longer need

## Tech Stack

- [React](https://react.dev/) (with `useState` for state management)
- [Vite](https://vite.dev/) for the dev server and build tooling
- Plain CSS for styling

## Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/eldhoseabrahamemerson/react-todo-list.git
cd react-todo-list
npm install
```

Run the dev server:

```bash
npm run dev
```

Then open the local URL Vite prints in your terminal (usually `http://localhost:5173`).

## Other Scripts

- `npm run build` — builds the app for production
- `npm run preview` — previews the production build locally
- `npm run lint` — runs ESLint

## Notes

This is a learning project, so tasks currently live only in memory — refreshing the page clears your list. Adding persistence (like `localStorage`) would be a natural next step if you want to extend it.

## Author

Eldhose Abraham Emerson