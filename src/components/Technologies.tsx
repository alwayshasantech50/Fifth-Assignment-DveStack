import { useEffect, useState } from "react";
import type { Technology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

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
  <section className="max-w-7xl mx-auto px-4 py-16">

   <div className="mb-8">
  <h2 className="text-3xl font-bold">
    Explore the{" "}
    <span className="bg-linear-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
      Technologies
    </span>
  </h2>

  <p className="text-sm text-gray-500 mt-2">
    Pick one technology per category to build your ideal stack.
  </p>
</div>


    <div className="grid lg:grid-cols-4 gap-8">



      <div className="lg:col-span-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
            />
          ))}

        </div>
      </div>

      

      <div>
        <YourStack />
      </div>

    </div>

  </section>
);

};

export default Technologies;
