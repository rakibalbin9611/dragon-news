import { FaRegEye, FaStar } from "react-icons/fa";
import { BsBookmark, BsShare } from "react-icons/bs";

const NewsCard = ({ news }) => {
  const { title, rating, total_view, author, thumbnail_url, details } = news;

  return (
    <div className="card bg-base-100 shadow-md  rounded-xl overflow-hidden">
      {/* Author Section */}
      <div className="flex justify-between items-center px-5 py-3 bg-base-200">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold">{author.name}</p>
            <p className="text-sm text-gray-500">
              {new Date(author.published_date).toISOString().split("T")[0]}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-gray-600">
          <BsBookmark className="cursor-pointer" />
          <BsShare className="cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <div className="px-5 pt-4">
        <h2 className="font-bold text-lg">{title}</h2>
      </div>

      {/* Thumbnail */}
      <figure className="px-5 py-3">
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-64 object-cover rounded-lg"
        />
      </figure>

      {/* Details */}
      <div className="px-5 text-sm text-gray-600">
        <p>
          {details.length > 200 ? details.slice(0, 200) + "..." : details}
          <span className="text-primary cursor-pointer font-medium">
            {" "}
            Read More
          </span>
        </p>
      </div>

      {/* Footer: rating + views */}
      <div className="flex justify-between items-center px-5 py-4  mt-4">
        <div className="flex items-center gap-1 text-warning">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar key={i} className="text-warning" />
          ))}
          <span className="ml-2 text-gray-700 font-semibold">
            {rating.number}
          </span>
        </div>

        <div className="flex items-center gap-2 text-gray-600 text-sm">
          <FaRegEye /> <span>{total_view.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
