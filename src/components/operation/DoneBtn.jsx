/* eslint-disable react/prop-types */
import { TiTickOutline } from "react-icons/ti";

const DoneBtn = ({ toggleDone }) => {
  return (
    <button onClick={toggleDone} className="btn btn-secondary rounded-xl p-2 size-12">
      <TiTickOutline size={26} />
    </button>
    
  );
};

export default DoneBtn;
