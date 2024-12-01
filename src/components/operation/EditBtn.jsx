/* eslint-disable react/prop-types */
import { TiEdit } from "react-icons/ti";

const EditBtn = ({ editTask }) => {
  return (
    <>
      <button onClick={editTask} className="btn btn-warning ml-2 rounded-xl p-2 size-12">
        <TiEdit size={26} />
      </button>
    </>
  );
};

export default EditBtn;
