import add from "../../assets/bg.png";

const Add = () => {
  return (
    <div className="relative w-full ">
      {/* Background Image */}
      <img src={add} alt="Background" className="w-full h-full object-cover" />

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col gap-5 items-center justify-center text-center text-white bg-black/30 p-4 ">
        <h1 className="text-3xl font-bold mb-4">
          Create an <br /> Amazing <br /> Newspaper
        </h1>
        <p className="mb-6">
          Discover thousands of <br /> options, easy to <br /> customize
          layouts, one-click <br /> to import demo and much more.
        </p>
        <button className="px-6 py-3 font-semibold bg-red-600 rounded hover:bg-red-700 transition">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Add;
