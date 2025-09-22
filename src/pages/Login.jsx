import { useState, use } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const location = useLocation();
  const { loginUser, setUser } = use(AuthContext);
  const navigate = useNavigate();

  // state for error messages
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault(); // stop page reload
    setError(""); // reset error

    const form = e.target;
    const email = form.email.value.trim();
    const password = form.password.value.trim();

    // validation
    if (!email) {
      setError("Email is required");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    if (!password) {
      setError("Password is required");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    // Firebase login
    loginUser(email, password)
      .then((res) => {
        const user = res.user;
        setUser(user);
        navigate(location.state ? location.state : "/");
      })
      .catch((err) => {
        setError(err.message); // show firebase error
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-md">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-center mb-6">
          Login your account
        </h2>

        <hr className="mb-6" />

        {/* FORM START */}
        <form onSubmit={handleLogin}>
          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-3 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
          )}

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition"
          >
            Login
          </button>
        </form>
        {/* FORM END */}

        {/* Register Link */}
        <p className="text-center text-sm mt-6">
          Don’t Have An Account?{" "}
          <Link to={"/auth/register"} className="text-red-500 font-medium">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
