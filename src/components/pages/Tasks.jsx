/* eslint-disable react/prop-types */
import DeleteBtn from "../operation/DeleteBtn";
import DoneBtn from "../operation/DoneBtn";
import EditBtn from "../operation/EditBtn";

const Tasks = ({ tasks, deleteTask, toggleDone, editTask }) => {
  return (
    <div className="flex flex-col h-full">
      {tasks.map((task) => (
        <div
          key={task.id}
          className={`collapse collapse-arrow mb-2 md:w-80 w-72 md:mr-14 mr-10 ${
            task.done ? "bg-green-700" : "bg-base-300"
          }`}
        >
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            <p>{task.text} </p>
          </div>
          <div className="collapse-content">
            <DoneBtn toggleDone={() => toggleDone(task.id)} />
            <EditBtn
              editTask={() => editTask(task.id, prompt("New text:", task.text))}
            />
            <DeleteBtn deleteTask={() => deleteTask(task.id)} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
