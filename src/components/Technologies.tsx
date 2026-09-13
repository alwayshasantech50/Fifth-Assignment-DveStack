import { useEffect, useState } from "react";
import type { Technology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";

const Technologies = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h2>Technologies: {technologies.length}</h2>

      {technologies.map((technology) => (
        <TechnologyCard key={technology.id} technology={technology} />
      ))}
    </div>
  );
};

export default Technologies;
