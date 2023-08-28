import { useEffect, useState } from "react";
import History from "./History";
import Navbar from "./Navbar";
import ScheduleTimer from "./ScheduleTimer";
import StartTimer from "./StartTimer";
import Timer from "./Timer";
import Time from "./Time";

function App() {
  const [project, setProject] = useState("test");
  const [duration, setDuration] = useState(10);
  let durationInSeconds = duration * 60;

  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [startedTimer, setStartedTimer] = useState(false);

  const [history, setHistory] = useState(() => {
    const localData = localStorage.getItem("task");
    return localData ? JSON.parse(localData) : [];
  });
  const [showHistory, setShowHistory] = useState(false); // [{}]
  const handleShowHistory = (e) => {
    e.preventDefault();
    setShowHistory(true);
  };

  const handleShowTimer = (e) => {
    e.preventDefault();
    setShowHistory(false);
  };

  const handleProject = (e) => {
    setProject(e.target.value);
  };
  const handleDuration = (e) => {
    setDuration(Number(e.target.value));
  };

  const handleDecreaseDuration = () => {
    if (duration < 0) return;
    setDuration(Number(duration - 1));
  };
  const handleIncreaseDuration = () => {
    setDuration(Number(duration + 1));
  };

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        if (seconds === 0) {
          setMinutes((prevMinutes) => prevMinutes - 1);
          setSeconds(59);
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
    if (seconds === 0 && Math.floor(minutes) === 0) {
      // setProject("");
      // setDuration(0);
      setStartedTimer(false);
      setIsRunning(false);
      clearInterval(interval);
    }
    return () => clearInterval(interval); // Clean up the interval
  }, [isRunning, seconds, minutes]);

  const startTimer = () => {
    if (!duration || !project) return;
    setSeconds(durationInSeconds % 60);
    setMinutes(durationInSeconds / 60);
    setIsRunning(true);
    setStartedTimer(!startedTimer);

    const newTask = {
      id: Date.now(),
      task: project,
      duration: duration,
    };

    addTask(newTask);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resumeTimer = () => {
    setIsRunning(true);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setMinutes(0);
    setSeconds(0);
  };

  const addTask = (newTask) => {
    setHistory((history) => [newTask, ...history]);
  };

  const deleteTask = (id) => {
    setHistory(history.filter((task) => task.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(history));
  }, [history]);

  return (
    <div className="bg-[#202024] w-[1000px] m-auto p-5 my-12 rounded-lg">
      <Navbar
        onHandleShowHistory={handleShowHistory}
        onHandleShowTimer={handleShowTimer}
      />

      {!showHistory ? (
        <div className="w-[658px] m-auto">
          <ScheduleTimer
            onDecreaseDuration={handleDecreaseDuration}
            onIncreaseDuration={handleIncreaseDuration}
            duration={duration}
            project={project}
            onProject={handleProject}
            onDuration={handleDuration}
            startedTimer={startedTimer}
          />
          <Timer>
            <Time>{Math.floor(minutes / 10)}</Time>
            <Time>{Math.floor(minutes % 10)}</Time>
            <span className="font-bold text-[#00875F] text-[160px] font-mono">
              :
            </span>
            <Time>{Math.floor(seconds / 10)}</Time>
            <Time>{Math.floor(seconds % 10)}</Time>
          </Timer>
          <StartTimer
            onStartTimer={startTimer}
            onPauseTimer={pauseTimer}
            onResetTimer={resetTimer}
            onResumeTimer={resumeTimer}
            startedTimer={startedTimer}
          />
        </div>
      ) : (
        <History
          history={history}
          isRunning={isRunning}
          onDeleteTask={deleteTask}
        />
      )}
    </div>
  );
}

export default App;
