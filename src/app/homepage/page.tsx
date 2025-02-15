import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-black min-h-screen text-white flex items-center justify-center px-4 -mb-32">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center px-6 py-20 w-full max-w-4xl">
        <h1 className="text-4xl sm:text-5xl xs:text-3xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text animate-fade-in">
          Welcome to Agentic AI
        </h1>
        <p className="mt-4 text-base sm:text-lg xs:text-sm text-gray-300 max-w-2xl">
          Revolutionizing artificial intelligence with self-evolving neural networks and cutting-edge automation.
        </p>

        {/* CTA Button with Proper Padding & Margin */}
        <Link href="/about"
          className="mt-8 md:mt-12 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105 inline-flex items-center justify-center">
          Learn More
        </Link>
      </section>
    </div>
  );
}

