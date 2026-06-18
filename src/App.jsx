import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (task.trim() === "") {
      return;
    }
    setTasks([
      ...tasks,
      {
        text: task,
        completed: false,
      },
    ]);
    setTask("");
  }

  function deleteTask(index) {
    const newTasks = tasks.filter((item, i) => i !== index);
    setTasks(newTasks);
  }

  function toggleTask(index) {
    const newTasks = [...tasks];

    newTasks[index].completed = !newTasks[index].completed;

    setTasks(newTasks);
  }

  return (
    <div className="container">
      <h1>My To-Do List</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTask();
            }
          }}
        />

        <button onClick={addTask}>Add Task</button>
      </div>

      <ul>
        {tasks.map((item, index) => (
          <li key={index}>

            <span
              style={{
                textDecoration: item.completed ? "line-through" : "none"
              }}
            >
              {item.text}
            </span>

            <div>

              <button onClick={() => toggleTask(index)}>
                {item.completed ? "Undo" : "Done"}
              </button>

              <button className="delete-btn" onClick={() => deleteTask(index)}>
                Delete
              </button>

            </div>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;