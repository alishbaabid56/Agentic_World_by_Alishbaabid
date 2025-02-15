import { FaServer, FaCloud, FaDatabase } from "react-icons/fa";

export default function Technology() {
  return (
    <div className="bg-black min-h-screen text-white px-4">
      {/* Header Section */}
      <section className="text-center px-4 py-16 animate-fadeIn">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          Advanced Technology
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
          Explore the cutting-edge technologies powering Agentic AI, from cloud computing to neural networks.
        </p>
      </section>

      {/* Technology Features */}
      <section className="py-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="p-8 rounded-lg bg-gray-900 shadow-lg hover:shadow-purple-500 transition-shadow duration-300 flex flex-col items-center text-center sm:text-left sm:flex-row gap-6 animate-slideUp delay-100">
            <FaServer className="w-16 h-16 text-purple-400" />
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-purple-400">Cloud Computing</h2>
              <p className="text-gray-300 mt-2 text-sm md:text-base">
                Scalable and secure AI infrastructure hosted on high-performance cloud platforms.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="p-8 rounded-lg bg-gray-900 shadow-lg hover:shadow-purple-500 transition-shadow duration-300 flex flex-col items-center text-center sm:text-left sm:flex-row gap-6 animate-slideUp delay-200">
            <FaDatabase className="w-16 h-16 text-pink-400" />
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-pink-400">Big Data Processing</h2>
              <p className="text-gray-300 mt-2 text-sm md:text-base">
                Efficient handling of massive datasets for real-time AI decision-making.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="p-8 rounded-lg bg-gray-900 shadow-lg hover:shadow-purple-500 transition-shadow duration-300 flex flex-col items-center text-center sm:text-left sm:flex-row gap-6 animate-slideUp delay-300">
            <FaCloud className="w-16 h-16 text-purple-400" />
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-purple-400">Neural Networks</h2>
              <p className="text-gray-300 mt-2 text-sm md:text-base">
                Advanced AI algorithms mimicking human intelligence for improved automation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
