import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="">
      <h2 className="font-semibold text-xl text-accent">Find Us On</h2>
      <ul className="menu bg-base-200 rounded-box w-56 mt-5">
        <li>
          <button className="btn flex items-center py-5 gap-2">
            <FaFacebook className="text-blue-600 text-lg" /> Facebook
          </button>
        </li>
        <li>
          <button className="btn flex items-center py-5 gap-2">
            <FaTwitter className="text-sky-500 text-lg" /> Twitter
          </button>
        </li>
        <li>
          <button className="btn flex items-center py-5 gap-2">
            <FaInstagram className="text-pink-500 text-lg" /> Instagram
          </button>
        </li>
      </ul>
    </div>
  );
};

export default FindUs;
