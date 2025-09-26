import { Link, NavLink } from "react-router-dom";
import { use, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import login from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, logOut, updateUser } = use(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        alert("You logged out successfully");
      })
      .catch((error) => console.log(error));
  };

  return (
    <nav className="w-full">
      <div className="flex justify-between items-center">
        {/* Logo/Brand placeholder */}
        <div className="text-xl font-semibold text-white  p-2">
          {" "}
          <span className="text-white">{user && user.email}</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 text-accent text-lg">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/career"}>Career</NavLink>
        </div>

        {/* Login */}
        <div className="flex items-center gap-4">
          {user ? (
            <button
              onClick={handleLogout}
              className="btn btn-primary hidden sm:block"
            >
              LogOut
            </button>
          ) : (
            <button className="btn btn-primary hidden sm:block">
              <Link to={"/auth/login"}>Login</Link>
            </button>
          )}
          {user ? (
            <img
              src={user.photoURL}
              alt={user.displayName || "user"}
              className="w-10  rounded-full border"
            />
          ) : (
            <img src={login} alt="user" className="w-10 h-10" />
          )}

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
          {/* login */}
          <Link to={"/auth/login"} className="btn btn-primary w-32">
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
