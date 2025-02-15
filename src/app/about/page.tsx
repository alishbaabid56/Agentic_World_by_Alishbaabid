import { FaBrain, FaRobot, FaMicrochip } from "react-icons/fa"; // Importing icons

export default function About() {
  return (
    <div className="bg-black min-h-screen text-white px-4 -mb-36">
      {/* Header Section */}
      <section className="text-center px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          About Agentic AI
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
          Agentic AI is at the forefront of artificial intelligence, harnessing the power of deep learning, automation, and cognitive intelligence.
        </p>
      </section>

      {/* AI Capabilities Section */}
      <section className="py-10 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Capability 1 */}
          <div className="p-8 rounded-lg bg-gray-900 shadow-lg hover:shadow-purple-500 transition-shadow duration-300 flex flex-col items-center text-center sm:text-left sm:flex-row gap-6">
            <FaBrain className="w-20 h-20 text-purple-400" /> {/* Larger Icon */}
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-purple-400">Autonomous Learning</h2>
              <p className="text-gray-300 mt-2 text-sm md:text-base">
                Self-evolving AI models that adapt in real-time, learning from data and improving efficiency.
              </p>
            </div>
          </div>

          {/* Capability 2 */}
          <div className="p-8 rounded-lg bg-gray-900 shadow-lg hover:shadow-purple-500 transition-shadow duration-300 flex flex-col items-center text-center sm:text-left sm:flex-row gap-6">
            <FaRobot className="w-20 h-20 text-pink-400" /> {/* Larger Icon */}
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-pink-400">Cognitive Intelligence</h2>
              <p className="text-gray-300 mt-2 text-sm md:text-base">
                AI systems capable of understanding, reasoning, and making informed decisions like humans.
              </p>
            </div>
          </div>

          {/* Capability 3 */}
          <div className="p-8 rounded-lg bg-gray-900 shadow-lg hover:shadow-purple-500 transition-shadow duration-300 flex flex-col items-center text-center sm:text-left sm:flex-row gap-6">
            <FaMicrochip className="w-20 h-20 text-purple-400" /> {/* Larger Icon */}
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-purple-400">Multi-Modal Processing</h2>
              <p className="text-gray-300 mt-2 text-sm md:text-base">
                Advanced AI that seamlessly integrates text, voice, and visual data for enhanced interactions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
