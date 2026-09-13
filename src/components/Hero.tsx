import heroImage from "../assets/images/banner-stack.png";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        
        
        <div>

          <h1 className="text-5xl font-bold leading-tight">
            Build Your Ideal
          </h1>

          <h1 className="text-5xl font-bold bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
            Development Stack
          </h1>

          <p className="mt-6 text-gray-500 max-w-lg">
            Explore frontend, backend, database and tooling options, <br />
            compare them side by side and put together the stack that fits your <br />
            next project.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="btn border-0 text-white bg-linear-to-r from-orange-500 via-pink-500 to-violet-500">
              Explore Technologies
            </button>

            <button className="btn btn-outline">
              Learn More
            </button>
          </div>

        </div>

        


        <div>
          <img src={heroImage} alt="Development Stack"
            className="w-full max-w-md mx-auto"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;