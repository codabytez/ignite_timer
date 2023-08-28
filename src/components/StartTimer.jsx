import Start from "../assets/Start.svg";

const StartTimer = ({
  onStartTimer,
  onPauseTimer,
  onResetTimer,
  onResumeTimer,
  startedTimer,
}) => {
  return (
    <div className="p-5">
      <button
        disabled={startedTimer}
        onClick={onStartTimer}
        className="m-auto bg-[#00B37E] rounded-lg h-16 w-[648px] text-base font-bold transition-all duration-400 hover:bg-[#015F43] disabled:bg-[#00875F] flex justify-center items-center"
        title="fill in the name and duration before starting."
      >
        <img className="px-2" src={Start} alt="Start button" />
        Start
      </button>
      {/* <button
        // disabled={startedTimer}
        onClick={onResumeTimer}
        className="m-auto bg-[#00B37E] rounded-lg h-16 w-[648px] text-base font-bold transition-all duration-400 hover:bg-[#015F43] disabled:bg-[#00875F] flex justify-center items-center"
        // title="fill in the name and duration before starting."
      >
        <img className="px-2" src={Start} alt="Start button" />
        Resume
      </button>
      <button
        // disabled={startedTimer}
        onClick={onPauseTimer}
        className="m-auto bg-[#00B37E] rounded-lg h-16 w-[648px] text-base font-bold transition-all duration-400 hover:bg-[#015F43] disabled:bg-[#00875F] flex justify-center items-center"
        // title="fill in the name and duration before starting."
      >
        <img className="px-2" src={Start} alt="Start button" />
        Pause
      </button>
      <button
        // disabled={startedTimer}
        onClick={onResetTimer}
        className="m-auto bg-[#00B37E] rounded-lg h-16 w-[648px] text-base font-bold transition-all duration-400 hover:bg-[#015F43] disabled:bg-[#00875F] flex justify-center items-center"
        // title="fill in the name and duration before starting."
      >
        <img className="px-2" src={Start} alt="Start button" />
        Reset
      </button> */}
    </div>
  );
};

export default StartTimer;

{
  /* <button onClick={startTimer}>Start</button> */
}
{
  /* <button onClick={pauseTimer}>Pause</button> */
}
{
  /* <button onClick={resetTimer}>Reset</button> */
}

// import React, { useState } from 'react';

// function HoverButton() {
//   const [isHovered, setIsHovered] = useState(false);

//   const handleHover = () => {
//     setIsHovered(true);
//   };

//   const handleLeave = () => {
//     setIsHovered(false);
//   };

//   return (
//     <div>
//       <button
//         onMouseEnter={handleHover}
//         onMouseLeave={handleLeave}
//         className="hoverable-button"
//       >
//         Hover Me
//       </button>
//       {isHovered && (
//         <div className="hover-text">
//           Text to display when hovering.
//         </div>
//       )}
//     </div>
//   );
// }

// export default HoverButton;
