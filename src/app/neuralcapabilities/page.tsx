"use client"


import { FaBrain, FaComments, FaCodeBranch, FaShieldAlt } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

export default function NeuralCapabilities() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // Adjust visibility trigger
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

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
      <section
        ref={sectionRef}
        className={`px-6 py-10 max-w-5xl mx-auto grid gap-6 transition-opacity duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {[
          {
            icon: <FaBrain className="text-4xl text-purple-400" />,
            title: "Autonomous Learning",
            description:
              "Self-evolving neural networks that continuously adapt to your business needs through reinforcement learning.",
          },
          {
            icon: <FaComments className="text-4xl text-pink-400" />,
            title: "Multi-Modal Intelligence",
            description:
              "Advanced AI capable of processing text, voice, and visual data for comprehensive understanding.",
          },
          {
            icon: <FaCodeBranch className="text-4xl text-purple-400" />,
            title: "Cognitive Integration",
            description:
              "Seamless integration with existing systems through advanced cognitive APIs and neural bridges.",
          },
          {
            icon: <FaShieldAlt className="text-4xl text-pink-400" />,
            title: "Ethical AI Framework",
            description:
              "Built-in ethical guidelines and safety protocols ensuring responsible AI deployment.",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="p-6 rounded-lg bg-gray-900 shadow-lg hover:shadow-purple-500 transition-shadow duration-300 flex items-center gap-4"
          >
            {feature.icon}
            <div>
              <h2 className="text-xl font-semibold text-white">{feature.title}</h2>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
