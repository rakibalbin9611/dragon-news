import { useLoaderData, useParams } from "react-router-dom";
import Header from "../components/Header";
import RightAside from "../components/homeLayout/RightAside";
import NewsDetailCard from "./NewsDetailCard";

const NewsDetails = () => {
  const news = useLoaderData([]);
  const { id } = useParams();

  const filteredNews = news.find((singleNews) => singleNews.id === id);

  return (
    <div>
      {/* Header */}
      <header>
        <Header />
      </header>

      {/* Main Content */}
      <main className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6 my-8">
        {/* News Detail Section */}
        <div className="md:col-span-2 lg:col-span-9">
          <h2 className="font-semibold text-xl sm:text-2xl lg:text-3xl mb-4 sm:mb-5">
            Insight Today
          </h2>
          <NewsDetailCard singleNews={filteredNews} />
        </div>

        {/* Right Aside */}
        <aside className="md:col-span-1 lg:col-span-3 mt-6 md:mt-0">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
