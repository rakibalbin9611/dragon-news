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
      <main className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 my-8">
        {/* News Detail Section */}
        <div className="lg:col-span-9">
          <h2 className="font-semibold text-2xl mb-5">Insight Today</h2>
          <NewsDetailCard singleNews={filteredNews} />
        </div>

        {/* Right Aside */}
        <aside className="lg:col-span-3">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
