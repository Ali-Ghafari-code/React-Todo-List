import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import SwapTheme from "./components/SwapTheme";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const addTask = (taskText) => {
    const newTask = { text: taskText, id: Date.now(), done: false };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const toggleDone = (id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTasks(newTasks);
  };

  const editTask = (id, newText) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, text: newText } : task
    );
    setTasks(newTasks);
  };

  return (
    <>
      <SwapTheme />
      <div className="flex flex-col justify-center items-center h-screen mt-0">
        <AddTask addTask={addTask} />
        <Tasks
          tasks={tasks}
          deleteTask={deleteTask}
          toggleDone={toggleDone}
          editTask={editTask}
        />
      </div>
    </>
  );
}

export default App;
