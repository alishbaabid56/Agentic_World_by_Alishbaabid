"use client"
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaRobot } from "react-icons/fa";
import { ReactNode } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b border-gray-800 bg-black relative">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        {/* Robot icon with gradient background */}
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center">
          <FaRobot className="text-black w-6 h-6" />
        </div>
        {/* Gradient text for brand name */}
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Agentia World
        </h1>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/technology">Technology</NavLink>
        <NavLink href="/analysis">Analysis</NavLink>
        <NavLink href="/pricing">Pricing</NavLink>
        <NavLink href="/contact">Contact Us</NavLink>
      

        <button className="px-5 py-2 bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-full font-semibold hover:opacity-90 transition duration-300">
            Get Started
          </button>
        </div>
        

      {/* Mobile Menu Icon */}
      <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-gray-300 md:hidden">
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black border-t border-gray-800 flex flex-col items-center space-y-4 py-4 md:hidden">
          <NavLink href="/" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink href="/technology" onClick={() => setIsOpen(false)}>  Technology</NavLink>
          <NavLink href="/analysis" onClick={() => setIsOpen(false)}>Analysis</NavLink>
          <NavLink href="/pricing" onClick={() => setIsOpen(false)}>Pricing</NavLink>
         
          <NavLink href="/contact" onClick={() => setIsOpen(false)}>Contact Us</NavLink>
          
            <button className="mt-2 px-5 py-2 bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-full font-semibold hover:opacity-90 transition duration-300">
              Get Started
            </button>
        </div>
      )}
    </nav>
  );
}

// Define the props interface for NavLink
interface NavLinkProps {
  href: string;
  children: ReactNode;
  onClick?: () => void;
}

// Navigation Link Component with TypeScript
const NavLink = ({ href, children, onClick }: NavLinkProps) => (
  <Link href={href}>
    <span onClick={onClick} className="cursor-pointer text-gray-300 hover:text-purple-400 transition duration-300">
      {children}
    </span>
  </Link>
);
