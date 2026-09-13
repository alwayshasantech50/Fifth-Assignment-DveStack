import type { Technology } from "../types/technology";

type YourStackProps = {
  selectedTechnologies: Technology[];
  handleRemoveTechnology: (id: string) => void;
  handleRemoveAll: () => void;
};

const YourStack = ({
  selectedTechnologies,
  handleRemoveTechnology,
  handleRemoveAll }: YourStackProps) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md sticky top-24">
      <h2 className="text-xl font-bold">
        Your Stack ({selectedTechnologies.length})
      </h2>

      {selectedTechnologies.length === 0 ? (
        <p className="mt-4 text-gray-500">
          No technologies selected yet.
        </p>
      ) : (
        <div className="mt-4 space-y-3">
          {selectedTechnologies.map((technology) => (
            <div
              key={technology.id}
              className="flex justify-between items-center border rounded-lg p-3"
            >
              <div className="flex items-center gap-3">
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

              <button
                onClick={() =>
                  handleRemoveTechnology(technology.id)
                }
                className="text-pink-600 font-bold text-lg cursor-pointer">
                ✕
              </button>

            </div>
          ))}
            <button
              onClick={handleRemoveAll}
              className="w-full mt-4 text-white bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 py-2 rounded-md cursor-pointer">
               Remove All
            </button>

        </div>
      )}
    </div>
  );
};

export default YourStack;