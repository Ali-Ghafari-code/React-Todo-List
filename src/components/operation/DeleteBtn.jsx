/* eslint-disable react/prop-types */
import { TiDelete } from "react-icons/ti";

const DeleteBtn = ({ deleteTask }) => {
  return (
    <button onClick={deleteTask} className="btn btn-error ml-2 rounded-xl p-2 size-12">
      <TiDelete size={26} />
    </button>
  );
};

export default DeleteBtn;
