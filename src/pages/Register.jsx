import { useState, use } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createUser, setUser } = use(AuthContext);
  const navigate = useNavigate();

  // controlled form state
  const [form, setForm] = useState({
    name: "",
    photo: "",
    email: "",
    password: "",
    terms: false,
  });

  // per-field errors
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    terms: "",
  });

  // server / firebase error
  const [serverError, setServerError] = useState("");

  // name validation function (called live)
  const validateName = (name) => {
    const v = name.trim();
    if (!v) return "Name is required";
    if (v.length < 3) return "Name must be at least 3 characters";
    if (!/^[A-Za-z\s]+$/.test(v))
      return "Name may contain only letters and spaces";
    return "";
  };

  // handle input change (live validation for name, email, password)
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setForm((prev) => ({ ...prev, [name]: val }));

    // live validations
    if (name === "name") {
      setErrors((prev) => ({ ...prev, name: validateName(value) }));
    }
    if (name === "email") {
      setErrors((prev) => ({
        ...prev,
        email:
          !value || /\S+@\S+\.\S+/.test(value)
            ? ""
            : "Please enter a valid email",
      }));
    }
    if (name === "password") {
      setErrors((prev) => ({
        ...prev,
        password:
          !value || value.length >= 6
            ? ""
            : "Password must be at least 6 characters",
      }));
    }
    if (name === "terms") {
      setErrors((prev) => ({
        ...prev,
        terms: checked ? "" : "You must accept the Terms & Conditions",
      }));
    }
  };

  // onBlur ensure name validation runs when user leaves the field
  const handleBlur = (e) => {
    if (e.target.name === "name") {
      setErrors((prev) => ({ ...prev, name: validateName(form.name) }));
    }
  };

  // submit handler validates everything and calls createUser
  const handleRegister = (e) => {
    e.preventDefault();
    setServerError("");

    const nameErr = validateName(form.name);
    const emailErr = !form.email
      ? "Email is required"
      : !/\S+@\S+\.\S+/.test(form.email)
      ? "Please enter a valid email address"
      : "";
    const passwordErr = !form.password
      ? "Password is required"
      : form.password.length < 6
      ? "Password must be at least 6 characters"
      : "";
    const termsErr = form.terms ? "" : "You must accept the Terms & Conditions";

    const newErrors = {
      name: nameErr,
      email: emailErr,
      password: passwordErr,
      terms: termsErr,
    };
    setErrors(newErrors);

    // stop if there are errors
    const hasError = Object.values(newErrors).some(Boolean);
    if (hasError) return;

    // call firebase / auth
    createUser(form.email, form.password)
      .then((res) => {
        const user = res.user;
        setUser(user);
        navigate("/");
      })
      .catch((error) => {
        setServerError(error.message || "Registration failed");
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Register your account
        </h2>

        <hr className="mb-6" />

        <form onSubmit={handleRegister} noValidate>
          {/* Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="name">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your name"
              className={`w-full px-4 py-3 rounded-md bg-gray-100 border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-gray-400`}
              aria-invalid={!!errors.name}
              required
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-2">{errors.name}</p>
            )}
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
              value={form.photo}
              onChange={handleChange}
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
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className={`w-full px-4 py-3 rounded-md bg-gray-100 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-gray-400`}
              aria-invalid={!!errors.email}
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-2">{errors.email}</p>
            )}
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
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className={`w-full px-4 py-3 rounded-md bg-gray-100 border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-gray-400`}
              aria-invalid={!!errors.password}
              required
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-2">{errors.password}</p>
            )}
          </div>

          {/* Terms & Conditions */}
          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={form.terms}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="terms" className="text-sm">
              Accept <span className="font-semibold">Terms & Conditions</span>
            </label>
          </div>
          {errors.terms && (
            <p className="text-red-500 text-sm mb-4">{errors.terms}</p>
          )}

          {/* Server / Firebase Error */}
          {serverError && (
            <p className="text-red-500 text-sm mb-4 text-center">
              {serverError}
            </p>
          )}

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition"
          >
            Register
          </button>
        </form>

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
