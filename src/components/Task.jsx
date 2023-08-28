import { MdOutlineDeleteSweep } from "react-icons/md";

const Task = ({ id, task, duration, onDeleteTask }) => {
  return (
    <>
      <div className="relative bg-[#29292E] text-[#C4C4CC] flex justify-around border-[#202024] border-b-4 p-4">
        <p>{task}</p>
        <p>{duration} minutes</p>
        <button className="absolute right-2" onClick={() => onDeleteTask(id)}>
          <MdOutlineDeleteSweep className="text-[#C4C4CC] text-2xl hover:text-red-600" />
        </button>
      </div>
    </>
  );
};

export default Task;
