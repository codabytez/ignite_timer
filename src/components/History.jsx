import task from "./task.js";
import Task from "./Task.jsx";

const History = ({ history, onDeleteTask }) => {
  return (
    <div>
      <h2 className="font-bold text-2xl">My History</h2>
      <div className="text-sm">
        <div className="bg-[#323238] rounded-t-lg padding-20 my-1">
          <div className="flex justify-around font-bold py-4 pr-4">
            <h3>Task</h3>
            <h3>Duration</h3>
            {/* <h3>Started</h3>
            <h3>Status</h3> */}
          </div>
        </div>
        <div className="bg-[#29292E] rounded-b-lg">
          {history.map(({ id, task, duration }) => (
            <Task
              key={id}
              id={id}
              task={task}
              duration={duration}
              onDeleteTask={onDeleteTask}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;
