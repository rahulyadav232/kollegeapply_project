import React, { useState, useEffect } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import mockData from "./data.json";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  useEffect(() => {
    const trimmedTerm = searchTerm.trim();
    if (trimmedTerm) {
      const results = mockData.filter((item) =>
        item.name.toLowerCase().includes(trimmedTerm.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const categories = ["Universities", "Colleges", "Exams", "Courses", "News"];

  return (
    <nav className="bg-white shadow-md py-3 px-6 flex justify-between items-center border-b relative">
      {/* Left: Logo */}
      <img className="h-8" src="/Kollege.png" alt="Logo" />

      {/* Middle: Categories (Desktop) */}
      <div className="hidden md:flex gap-6">
        {categories.map((category) => (
          <Link
            to="#"
            key={category}
            className="text-gray-700 hover:text-blue-600 flex items-center"
            aria-label={`Go to ${category}`}
          >
            {category} <IoIosArrowDown className="ml-1" />
          </Link>
        ))}
      </div>

      {/* Right: Desktop Search & Mobile Menu Button */}
      <div className="flex items-center gap-4">
        {/* Desktop Search Bar (Remains Unchanged) */}
        <div className="relative hidden md:block w-96">
          <div className="flex items-center border p-2 rounded-md w-full">
            <FaSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search for Colleges, Exams, Courses & more..."
              className="text-sm outline-none w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <IoMdClose
                className="text-gray-500 cursor-pointer ml-2"
                onClick={() => setSearchTerm("")}
              />
            )}
          </div>

          {/* Search Results */}
          {searchResults.length > 0 && (
            <div
              className="absolute bg-white shadow-md w-full mt-1 max-h-60 overflow-y-auto border rounded-md z-10"
              role="listbox"
            >
              {searchResults.map((result) => (
                <div
                  key={result.id}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  // role="option"
                >
                  {result.name}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Mobile Search Button */}
        <button
          className="md:hidden text-gray-700 text-lg"
          onClick={() => setShowMobileSearch(!showMobileSearch)}
          aria-label="Open search"
        >
          <FaSearch />
        </button>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden text-gray-700 text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Search Bar (Dropdown) */}
      {showMobileSearch && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md py-3 px-4 border-t flex items-center z-50 md:hidden">
          <div className="flex items-center border p-2 rounded-md w-full">
            <FaSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search..."
              className="text-sm outline-none w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <IoMdClose
                className="text-gray-500 cursor-pointer ml-2"
                onClick={() => setSearchTerm("")}
              />
            )}
          </div>
        </div>
      )}

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col py-3 border-t z-50 md:hidden">
          {categories.map((category) => (
            <Link
              to="#"
              key={category}
              className="py-2 px-6 text-gray-700 hover:bg-gray-100"
              onClick={() => setMenuOpen(false)}
            >
              {category}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
