import AnalysisChart from "@/components/AnalysisChart";

export default function Analysis() {
  return (
    <div className="bg-black min-h-screen text-white px-4">
      <section className="text-center px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          AI-Powered Analysis
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
          Gain insights from intelligent AI-driven analytics and predictive modeling.
        </p>
      </section>

      <AnalysisChart /> {/* AI Growth Chart */}
    </div>
  );
}
