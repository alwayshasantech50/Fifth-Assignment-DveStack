import type { Technology } from "../types/technology";

type TechnologyCardProps = {
  technology: Technology;
  handleAddTechnology: (technology: Technology) => void;
  isAdded: boolean;
};


const TechnologyCard = ({ technology, handleAddTechnology, isAdded }: TechnologyCardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">

      
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

      
      
      <button
       disabled={isAdded}
       onClick={() => handleAddTechnology(technology)}
        className={`w-full text-white text-sm py-2 rounded-md mt-4 transition duration-300 ${
         isAdded ? "bg-green-600 cursor-not-allowed" : "bg-slate-900 hover:bg-pink-700" }`}>
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>

    </div>
  );
};

export default TechnologyCard;