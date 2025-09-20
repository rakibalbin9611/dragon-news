import dayjs from "dayjs";
import logo from "../assets/logo.png";

const Header = () => {
  const date = dayjs("2025-09-19").format("dddd, MMMM D, YYYY");
  return (
    <div className="flex flex-col justify-center items-center mt-8">
      <img src={logo} alt="" />
      <p className="text-[18px] text-accent mt-5">
        Journalism Without Fear or Favour
      </p>
      <p className="mt-2.5 text-accent font-semibold">{date}</p>
    </div>
  );
};

export default Header;
