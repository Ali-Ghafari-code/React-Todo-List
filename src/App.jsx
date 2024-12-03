import { useState, useEffect } from "react";
import AddTask from "./components/pages/AddTask";
import SwapTheme from "./components/theme/SwapTheme";
import Tasks from "./components/pages/Tasks";

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

  const addTask = (taskText, category) => {
    const newTask = { text: taskText, category, id: Date.now(), done: false };
    setTasks([newTask, ...tasks]);
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
      <h1 className="text-center text-3xl text-info mb-10">
        What gets written, gets done!
      </h1>
      <div className="flex flex-col justify-center items-center h-full mt-0">
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
