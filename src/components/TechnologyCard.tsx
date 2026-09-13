import type { Technology } from "../types/technology";

type TechnologyCardProps = {
  technology: Technology;
};

const TechnologyCard = ({ technology }: TechnologyCardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">

      
      <div className="flex justify-between items-center">
        <img src={technology.icon} alt={technology.name}
          className="w-8 h-8"
        />

        <span className="text-xs border border-gray-200 rounded-full px-3 py-1">
          {technology.badge}
        </span>
      </div>

     

      <h3 className="text-lg font-semibold mt-4">
        {technology.name}
      </h3>

      

      <p className="text-xs text-gray-500 mt-2">
        {technology.description}
      </p>

      
      <div className="flex justify-between items-center mt-4 text-xs">

        <span className="bg-gray-100 px-2 py-1 rounded">
          {technology.category}
        </span>

        <span className="text-gray-500">
          {technology.difficulty}
        </span>

        <span>
          ⭐ {technology.rating}
        </span>

      </div>

      
      
      <button className="w-full bg-slate-900 text-white text-sm py-2 rounded-md mt-4">
        Add to Stack
      </button>

    </div>
  );
};

export default TechnologyCard;