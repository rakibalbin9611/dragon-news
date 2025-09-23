import dayjs from "dayjs";
import logo from "../assets/logo.png";

const Header = () => {
  const date = dayjs("2025-09-19").format("dddd, MMMM D, YYYY");
  return (
    <div className="flex flex-col justify-center items-center mt-6 sm:mt-8 lg:mt-12 px-4">
      {/* Logo */}
      <img
        src={logo}
        alt="Logo"
        className="w-40 sm:w-52 md:w-64 lg:w-72 xl:w-80 h-auto"
      />

      {/* Tagline */}
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-accent mt-4 text-center">
        Journalism Without Fear or Favour
      </p>

      {/* Date */}
      <p className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl text-accent font-semibold text-center">
        {date}
      </p>
    </div>
  );
};

export default Header;
