
import { FaBrain, FaComments, FaCodeBranch, FaShieldAlt } from "react-icons/fa";

export default function NeuralCapabilities() {
  return (
    <div className="bg-black min-h-screen text-white">
      

      {/* Header Section */}
      <section className="text-center px-6 py-16">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          Neural Capabilities
        </h1>
        <p className="mt-2 text-lg text-gray-300">
          Powered by next-generation artificial intelligence
        </p>
      </section>

      {/* AI Feature Cards */}
      <section className="px-6 py-10 max-w-5xl mx-auto grid gap-6">
        {/* Feature 1 */}
        <div className="p-6 rounded-lg bg-gray-900 shadow-lg hover:shadow-purple-500 transition-shadow duration-300 flex items-center gap-4">
          <FaBrain className="text-4xl text-purple-400" />
          <div>
            <h2 className="text-xl font-semibold text-white">Autonomous Learning</h2>
            <p className="text-gray-300">
              Self-evolving neural networks that continuously adapt to your business needs through reinforcement learning.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="p-6 rounded-lg bg-gray-900 shadow-lg hover:shadow-purple-500 transition-shadow duration-300 flex items-center gap-4">
          <FaComments className="text-4xl text-pink-400" />
          <div>
            <h2 className="text-xl font-semibold text-white">Multi-Modal Intelligence</h2>
            <p className="text-gray-300">
              Advanced AI capable of processing text, voice, and visual data for comprehensive understanding.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="p-6 rounded-lg bg-gray-900 shadow-lg hover:shadow-purple-500 transition-shadow duration-300 flex items-center gap-4">
          <FaCodeBranch className="text-4xl text-purple-400" />
          <div>
            <h2 className="text-xl font-semibold text-white">Cognitive Integration</h2>
            <p className="text-gray-300">
              Seamless integration with existing systems through advanced cognitive APIs and neural bridges.
            </p>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="p-6 rounded-lg bg-gray-900 shadow-lg hover:shadow-purple-500 transition-shadow duration-300 flex items-center gap-4">
          <FaShieldAlt className="text-4xl text-pink-400" />
          <div>
            <h2 className="text-xl font-semibold text-white">Ethical AI Framework</h2>
            <p className="text-gray-300">
              Built-in ethical guidelines and safety protocols ensuring responsible AI deployment.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
