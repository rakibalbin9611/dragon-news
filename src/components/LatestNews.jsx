import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
const LatestNews = () => {
  const [breakingNews, setBreakingNews] = useState([]);

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => {
        const breaking = data.filter(
          (news) => news.others.is_today_pick === true
        );
        // console.log(breaking);
        setBreakingNews(breaking);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="flex items-center gap-5 bg-[#F3F3F3] py-2 px-2">
      <p className="text-base-100 bg-secondary px-3 py-2">latest</p>
      <Marquee className="" pauseOnHover={true} speed={60}>
        {breakingNews.map((news) => (
          <p className="text-primary mx-2">{news.title} ;</p>
        ))}
      </Marquee>
    </div>
  );
};

export default LatestNews;
