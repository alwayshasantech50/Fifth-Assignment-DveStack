import type { Technology } from "../types/technology";

type YourStackProps = {
  selectedTechnologies: Technology[];
};

const YourStack = ({ selectedTechnologies }: YourStackProps) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md sticky top-24">
      <h2 className="text-xl font-bold"> Your Stack ({selectedTechnologies.length}) </h2>
      
 {selectedTechnologies.length === 0 ? (
  <p className="mt-4 text-gray-500"> No technologies selected yet.</p>
) : (
  <div className="mt-4 space-y-3">
    {selectedTechnologies.map((technology) => (
      <div
        key={technology.id}
        className="flex items-center gap-3 border rounded-lg p-3">
        <img src={technology.icon} alt={technology.name}
          className="w-8 h-8"
        />

        <div>
          <h3 className="font-medium">
            {technology.name}
          </h3>

          <p className="text-xs text-gray-500">
            {technology.category}
          </p>
        </div>

      </div>

    ))}

  </div>

)}


</div>

);
};

export default YourStack;
