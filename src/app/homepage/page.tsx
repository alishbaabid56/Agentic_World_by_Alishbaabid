// import Link from "next/link";

// export default function HomePage() {
//   return (
//     <div className="bg-black min-h-screen text-white flex items-center justify-center px-4 -mb-32">
//       {/* Hero Section */}
//       <section className="flex flex-col items-center text-center px-6 py-20 w-full max-w-4xl animate-fade-in">
//         {/* Animated Heading */}
//         <h1 className="text-4xl sm:text-5xl xs:text-3xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text animate-slide-down">
//           Welcome to Agentic World
//         </h1>

//         {/* Animated Paragraph */}
//         <p className="mt-4 text-base sm:text-lg xs:text-sm text-gray-300 max-w-2xl animate-slide-up">
//           Revolutionizing artificial intelligence with self-evolving neural networks and cutting-edge automation.
//         </p>

//         {/* Animated Button */}
//         <Link
//           href="/about"
//           className="mt-8 md:mt-12 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg transition-all duration-500 hover:scale-110 hover:shadow-xl"
//         >
//           Learn More
//         </Link>
//       </section>
//     </div>
//   );
// }

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-black min-h-screen text-white flex items-center justify-center px-4 -mb-32">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center px-6 py-20 w-full max-w-4xl animate-fade-in">
        {/* Animated Heading */}
        <h1 className="text-4xl sm:text-5xl xs:text-3xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text animate-slide-down">
          Welcome to Agentic World
        </h1>

        {/* Animated Paragraph */}
        <p className="mt-4 text-base sm:text-lg xs:text-sm text-gray-300 max-w-2xl animate-slide-up">
          Revolutionizing artificial intelligence with self-evolving neural networks and cutting-edge automation.
        </p>

        {/* Animated Button */}
        <Link
          href="/about"
          className="mt-8 md:mt-12 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover-scale transition-all duration-500 hover:shadow-xl"
        >
          Learn More
        </Link>
      </section>
    </div>
  );
}
