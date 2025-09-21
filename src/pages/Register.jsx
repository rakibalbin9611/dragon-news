import { use } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createUser, setUser } = use(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault(); // stops page reload
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const terms = form.terms.checked;

    // console.log({ name, photo, email, password, terms });
    createUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        setUser(user);
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-md">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-center mb-6">
          Register your account
        </h2>

        <hr className="mb-6" />

        {/* FORM START */}
        <form onSubmit={handleRegister}>
          {/* Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="name">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
          </div>

          {/* Photo URL */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="photo">
              Photo URL
            </label>
            <input
              type="text"
              id="photo"
              name="photo"
              placeholder="Enter photo URL"
              className="w-full px-4 py-3 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email
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
          <div className="mb-4">
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

          {/* Terms & Conditions */}
          <div className="mb-6 flex items-center">
            <input type="checkbox" id="terms" name="terms" className="mr-2" />
            <label htmlFor="terms" className="text-sm">
              Accept <span className="font-semibold">Terms & Conditions</span>
            </label>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition"
          >
            Register
          </button>
        </form>
        {/* FORM END */}

        {/* login Link */}
        <p className="text-center text-sm mt-6">
          Already have an account?{" "}
          <Link to={"/auth/login"} className="text-red-500 font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
