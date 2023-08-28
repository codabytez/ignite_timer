const ScheduleTimer = ({
  project,
  onProject,
  onDuration,
  onDecreaseDuration,
  onIncreaseDuration,
  duration,
  startedTimer,
}) => {
  return (
    <div className="w-[658px] text-center m-auto pb-7 font-bold">
      <h3 className="text-lg">
        I will work on
        <input
          className="bg-inherit border-b border-[#7C7C8A] text-[#7C7C8A] w-[200px] mx-2 py-1 focus-visible:outline-none"
          type="text"
          name="project"
          id="project"
          placeholder="Name your project"
          value={project}
          onChange={onProject}
          disabled={startedTimer}
          // disabled={true}
        />
        for
        <span className="border-b border-[#7C7C8A] text-[#7C7C8A] w-[50px] mx-2  py-1 px-1.5 focus-visible:outline-none">
          <button disabled={startedTimer} onClick={onDecreaseDuration}>
            -
          </button>
          <input
            className="text-center bg-inherit w-[50px] mx-1  py-1 focus-visible:outline-none"
            type="number"
            name="duration"
            id="duration"
            placeholder="00"
            value={duration}
            onChange={onDuration}
            disabled={startedTimer}
          />
          <button disabled={startedTimer} onClick={onIncreaseDuration}>
            +
          </button>
        </span>
        minutes
      </h3>
    </div>
  );
};

export default ScheduleTimer;
