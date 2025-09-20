import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-md">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-center mb-6">
          Login your account
        </h2>

        <hr className="mb-6" />

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="email">
            Email address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email address"
            className="w-full px-4 py-3 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-full px-4 py-3 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        {/* Login Button */}
        <button className="w-full py-3 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition">
          Login
        </button>

        {/* Register Link */}
        <p className="text-center text-sm mt-6">
          Don’t Have An Account ?{" "}
          <Link to={"/auth/register"} className="text-red-500 font-medium">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
