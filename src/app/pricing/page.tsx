

"use client";
import { useEffect, useRef, useState } from "react";

export default function Pricing() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // Triggers animation when 30% of section is visible
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
          AI Pricing Plans
        </h1>
        <p className="mt-2 text-lg text-gray-300">
          Choose the best plan for your AI-powered needs.
        </p>
      </section>

      {/* Pricing Cards with Scroll Animation */}
      <section
        ref={sectionRef}
        className={`grid md:grid-cols-3 gap-8 max-w-5xl mx-auto px-6 py-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-10"
        }`}
      >
        {/* Basic Plan */}
        <div className="p-6 rounded-lg bg-gray-900 shadow-lg hover:shadow-purple-500 transition-shadow duration-300 text-center">
          <h2 className="text-2xl font-semibold text-white">Basic</h2>
          <p className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text mt-2">
            $19/month
          </p>
          <ul className="mt-4 space-y-2 text-gray-300">
            <li>✔ AI Chat Support</li>
            <li>✔ Limited Neural Processing</li>
            <li>✔ 10 Requests per Day</li>
          </ul>
          <button className="mt-6 px-6 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition">
            Get Started
          </button>
        </div>

        {/* Pro Plan */}
        <div className="p-6 rounded-lg bg-gray-900 shadow-lg hover:shadow-pink-500 transition-shadow duration-300 text-center border-2 border-pink-400">
          <h2 className="text-2xl font-semibold text-white">Pro</h2>
          <p className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text mt-2">
            $49/month
          </p>
          <ul className="mt-4 space-y-2 text-gray-300">
            <li>✔ AI Chat + Voice Support</li>
            <li>✔ Medium Neural Processing</li>
            <li>✔ 100 Requests per Day</li>
            <li>✔ API Access</li>
          </ul>
          <button className="mt-6 px-6 py-2 bg-pink-600 rounded-lg hover:bg-pink-700 transition">
            Get Pro
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="p-6 rounded-lg bg-gray-900 shadow-lg hover:shadow-purple-500 transition-shadow duration-300 text-center">
          <h2 className="text-2xl font-semibold text-white">Enterprise</h2>
          <p className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text mt-2">
            $99/month
          </p>
          <ul className="mt-4 space-y-2 text-gray-300">
            <li>✔ AI Chat + Voice + Video</li>
            <li>✔ Advanced Neural Processing</li>
            <li>✔ Unlimited Requests</li>
            <li>✔ Custom AI Models</li>
          </ul>
          <button className="mt-6 px-6 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition">
            Get Enterprise
          </button>
        </div>
      </section>
    </div>
  );
}
