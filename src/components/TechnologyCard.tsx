import type { Technology } from "../types/technology";

type TechnologyCardProps = {
  technology: Technology;
};

const TechnologyCard = ({ technology }: TechnologyCardProps) => {
  return (
    <div>
      <h3>{technology.name}</h3>
      <p>{technology.category}</p>
    </div>
  );
};

export default TechnologyCard;