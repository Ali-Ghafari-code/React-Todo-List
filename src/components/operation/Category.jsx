/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "framer-motion";

const Category = ({ onCategorySelect, closeCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleAddCategory = () => {
    if (selectedCategory) {
      onCategorySelect(selectedCategory);
      closeCategory();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <motion.div
        className="bg-teal-900 rounded-lg p-6 shadow-lg w-96"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-lg font-bold mb-4 text-white">Add New Task</h2>
        <select
          className="select select-accent w-full p-2 border rounded mb-4"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="" disabled>
            Select Activity Type
          </option>
          <option value="study">Study</option>
          <option value="workout">Workout</option>
          <option value="work">Work</option>
          <option value="leisure">Leisure</option>
        </select>

        <button
          className="btn btn-primary w-full"
          onClick={handleAddCategory}
        >
          Add Task
        </button>
        <button
          className="btn btn-secondary w-full mt-2"
          onClick={closeCategory}
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default Category;
