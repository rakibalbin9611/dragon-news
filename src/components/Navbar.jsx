import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import login from "../assets/user.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full">
      <div className="flex justify-between items-center">
        {/* Logo/Brand placeholder */}
        <div className="text-2xl font-bold text-primary">Dragon News</div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 text-accent text-lg">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/career"}>Career</NavLink>
        </div>

        {/* Login */}
        <div className="flex items-center gap-4">
          <button className="btn btn-primary hidden sm:block">Login</button>
          <img src={login} alt="user" className="w-10 h-10" />

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-2xl text-accent"
            onClick={() => setOpen(!open)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="flex flex-col items-center gap-4 mt-4 md:hidden text-accent text-lg">
          <NavLink to={"/"} onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink to={"/about"} onClick={() => setOpen(false)}>
            About
          </NavLink>
          <NavLink to={"/career"} onClick={() => setOpen(false)}>
            Career
          </NavLink>
          <button className="btn btn-primary w-32">Login</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
