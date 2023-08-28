import Logo from "../assets/Logo.svg";
import Timer from "../assets/Timer.svg";
import History from "../assets/History.svg";

const Navbar = ({ onHandleShowHistory, onHandleShowTimer }) => {
  return (
    <div className="flex justify-between pb-10 px-5 items-center">
      <div>
        <img className="w-10 h-10" src={Logo} alt="Logo" />
      </div>
      <div className="flex">
        <button onClick={onHandleShowTimer}>
          <img className="w-16 h-16 p-5" src={Timer} alt="Timer" />
        </button>
        <button onClick={onHandleShowHistory}>
          <img className="w-16 h-16 p-5" src={History} alt="History" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
