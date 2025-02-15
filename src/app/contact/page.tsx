
import { FaEnvelope, FaPhone, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="bg-black min-h-screen text-white">
    

      {/* Header Section */}
      <section className="text-center px-6 py-16">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          Contact Us
        </h1>
        <p className="mt-2 text-lg text-gray-300">
          Get in touch with our team for inquiries or support.
        </p>
      </section>

      {/* Contact Form & Info */}
      <section className="max-w-4xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-gray-800 text-white focus:ring focus:ring-purple-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-gray-800 text-white focus:ring focus:ring-purple-500"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-gray-800 text-white focus:ring focus:ring-purple-500 h-32"
            ></textarea>
            <button
              type="submit"
              className="w-full p-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition text-white"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info & Social Links */}
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-2xl text-pink-400" />
            <p className="text-gray-300">support@agenticai.com</p>
          </div>
          <div className="flex items-center space-x-4">
            <FaPhone className="text-2xl text-purple-400" />
            <p className="text-gray-300">+1 234 567 890</p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-blue-500 transition">
              <FaFacebook className="text-3xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition">
              <FaTwitter className="text-3xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-600 transition">
              <FaLinkedin className="text-3xl" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
