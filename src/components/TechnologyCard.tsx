import type { Technology } from "../types/technology";

type TechnologyCardProps = {
  technology: Technology;
};

const TechnologyCard = ({ technology }: TechnologyCardProps) => {
  return (
    <div className="card bg-base-100 shadow-md border border-gray-200">
      <div className="card-body">

        <div className="flex justify-between items-center">
          <img src={technology.icon} alt={technology.name}
            className="w-10 h-10"
          />

          <span className="badge badge-outline">
            {technology.badge}
          </span>
        </div>

        <h2 className="card-title">
          {technology.name}
        </h2>

        <p className="text-sm text-gray-500">
          {technology.description}
        </p>

        <div className="flex gap-2 flex-wrap">
          <span className="badge">
            {technology.category}
          </span>

          <span className="badge badge-outline">
            {technology.difficulty}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span>⭐ {technology.rating}</span>

          <button className="btn btn-primary">Add To Stack</button>
        </div>

      </div>
    </div>
  );
};

export default TechnologyCard;