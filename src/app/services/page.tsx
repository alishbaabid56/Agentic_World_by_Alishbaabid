
import { FaRobot, FaImage, FaChartBar, FaShieldAlt, FaHeadset } from "react-icons/fa";

export default function Services() {
  return (
    <div className="bg-black min-h-screen text-white">
      

      {/* Header Section */}
      <section className="text-center px-6 py-16">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          Our AI-Powered Services
        </h1>
        <p className="mt-2 text-lg text-gray-300">
          Unlock the power of AI with our cutting-edge solutions.
        </p>
      </section>

      {/* Services Grid */}
      <section className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 py-10">
        {/* AI Chatbots */}
        <div className="p-6 rounded-lg bg-gray-900 shadow-lg hover:shadow-purple-500 transition-shadow duration-300 text-center">
          <FaRobot className="text-4xl mx-auto text-purple-400" />
          <h2 className="text-2xl font-semibold mt-4">AI Chatbots</h2>
          <p className="text-gray-300 mt-2">
            Engage users with intelligent, conversational AI chatbots.
          </p>
        </div>

        {/* AI Image Generation */}
        <div className="p-6 rounded-lg bg-gray-900 shadow-lg hover:shadow-pink-500 transition-shadow duration-300 text-center">
          <FaImage className="text-4xl mx-auto text-pink-400" />
          <h2 className="text-2xl font-semibold mt-4">AI Image Generation</h2>
          <p className="text-gray-300 mt-2">
            Create stunning AI-generated images with deep learning models.
          </p>
        </div>

        {/* AI Data Analysis */}
        <div className="p-6 rounded-lg bg-gray-900 shadow-lg hover:shadow-purple-500 transition-shadow duration-300 text-center">
          <FaChartBar className="text-4xl mx-auto text-purple-400" />
          <h2 className="text-2xl font-semibold mt-4">AI Data Analysis</h2>
          <p className="text-gray-300 mt-2">
            Gain deep insights with AI-powered data analytics and predictions.
          </p>
        </div>

        {/* AI Security Solutions */}
        <div className="p-6 rounded-lg bg-gray-900 shadow-lg hover:shadow-pink-500 transition-shadow duration-300 text-center">
          <FaShieldAlt className="text-4xl mx-auto text-pink-400" />
          <h2 className="text-2xl font-semibold mt-4">AI Security Solutions</h2>
          <p className="text-gray-300 mt-2">
            Protect your systems with AI-driven cybersecurity solutions.
          </p>
        </div>

        {/* AI Voice Assistants */}
        <div className="p-6 rounded-lg bg-gray-900 shadow-lg hover:shadow-purple-500 transition-shadow duration-300 text-center">
          <FaHeadset className="text-4xl mx-auto text-purple-400" />
          <h2 className="text-2xl font-semibold mt-4">AI Voice Assistants</h2>
          <p className="text-gray-300 mt-2">
            Experience hands-free AI assistance with advanced voice recognition.
          </p>
        </div>
      </section>
    </div>
  );
}
