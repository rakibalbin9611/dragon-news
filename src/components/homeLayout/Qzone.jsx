import swimming from "../../assets/swimming.png";
import classroom from "../../assets/class.png";
import play from "../../assets/playground.png";

const Qzone = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-accent">Q-Zone</h2>
      <div className="space-y-5 grid grid-cols-1">
        <img src={swimming} alt="" />
        <img src={swimming} alt="" />
        <img src={swimming} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
