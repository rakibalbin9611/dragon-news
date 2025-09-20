import Marquee from "react-fast-marquee";
const LatestNews = () => {
  return (
    <div className="flex items-center gap-5 bg-[#F3F3F3] py-5">
      <p className="text-base-100 bg-secondary px-3 py-2">latest</p>
      <Marquee className="" pauseOnHover={true} speed={60}>
        <p className="text-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, vero!
        </p>
        <p className="text-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, vero!
        </p>
        <p className="text-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, vero!
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
