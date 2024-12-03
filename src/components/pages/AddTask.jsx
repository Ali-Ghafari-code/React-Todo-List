/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import AddAlert from "../theme/AddAlert";
import Category from "../operation/Category";

const AddTask = ({ addTask }) => {
  const [task, setTask] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [selectedCategory, setSelectedCategory] = useState("General");

  const handleAddTask = () => {
    if (task.trim()) {
      setIsCategoryOpen(true);
    }
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    addTask(task, category);
    setTask("");
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <div className="flex flex-col justify-center items-center mb-10">
      {showAlert && <AddAlert />}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex justify-center items-center w-96"
      >
        <input
          type="text"
          placeholder="Type Your Task"
          className="input input-bordered input-info md:w-full w-64"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          className="btn btn-success ml-2 rounded-full p-2 size-12"
          onClick={handleAddTask}
        >
          <IoAddOutline size={30} />
        </button>
      </form>
      {isCategoryOpen && (
        <Category
          onCategorySelect={handleCategorySelect}
          closeCategory={() => setIsCategoryOpen(false)}
        />
      )}
    </div>
  );
};

export default AddTask;
