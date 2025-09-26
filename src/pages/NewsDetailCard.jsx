import { Link } from "react-router-dom";

const NewsDetailCard = ({ singleNews }) => {
  if (!singleNews) return null;

  const {
    title,
    author,
    image_url,
    details,
    tags,
    category_id,
    total_view,
    rating,
  } = singleNews;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden p-5">
      {/* Image */}
      <img
        src={image_url}
        alt={title}
        className="w-full h-56 sm:h-72 md:h-80 lg:h-[350px] object-cover"
      />

      {/* Content */}
      <div className="p-4 sm:p-6 lg:p-0">
        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 mt-5">
          {title}
        </h2>

        {/* Details */}
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-4">
          {details}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags?.map((tag, i) => (
            <span
              key={i}
              className="bg-gray-100 text-gray-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-6 text-gray-600 text-sm sm:text-base">
          <p>👁 {total_view} views</p>
          <p>
            ⭐ {rating?.number} ({rating?.badge})
          </p>
        </div>

        {/* Button */}
        <Link
          to={`/category/${category_id}`}
          className="inline-block bg-pink-600 text-white px-4 sm:px-5 py-2 rounded-lg hover:bg-pink-700 transition text-sm sm:text-base"
        >
          ← All news in this category
        </Link>
      </div>
    </div>
  );
};

export default NewsDetailCard;
