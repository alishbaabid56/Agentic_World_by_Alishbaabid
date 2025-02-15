import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold text-white">Agentic AI</h2>
          <p className="mt-2 text-gray-400">
            Empowering the future with AI-driven solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="/" className="hover:text-purple-400 transition">Home</a></li>
            <li><a href="/about" className="hover:text-purple-400 transition">About AI</a></li>
            <li><a href="/services" className="hover:text-purple-400 transition">Services</a></li>
            <li><a href="/pricing" className="hover:text-purple-400 transition">Pricing</a></li>
            <li><a href="/contact" className="hover:text-purple-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-gray-400 hover:text-blue-500 transition">
              <FaFacebook className="text-2xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-600 transition">
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 text-gray-500">
        © {new Date().getFullYear()} Agentic AI. All rights reserved.
      </div>
    </footer>
  );
}
