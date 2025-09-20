import { use } from "react";
import { NavLink } from "react-router-dom";

const categoryPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const categories = use(categoryPromise);
  return (
    <div>
      <h2 className="font-bold text-xl ">All Caterogy ({categories.length})</h2>
      <div className="grid grid-cols-1 gap-3 mt-5">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.id}`}
            className={
              "btn w-72 text-accent text-xl bg-base-100 flex justify-center hover:bg-base-200 border-0"
            }
            key={category.id}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
