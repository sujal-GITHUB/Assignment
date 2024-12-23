import React, { useState } from "react";
import {
  FolderIcon,
  CodeBracketSquareIcon,
  ShieldCheckIcon,
  InformationCircleIcon,
  Cog8ToothIcon,
  LifebuoyIcon,
  ArrowLeftOnRectangleIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Dropdownx from "./Dropdownx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  const handleItemClick = (item) => {
    setActiveItem(item);
    console.log(`Clicked on: ${item}`);
    setIsOpen(false);
  };

  const isActive = (item) => activeItem === item;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-white shadow-md w-full">
        <div className="flex justify-between items-center px-5 h-16">
          <div className="flex items-center">
            <img src="logo.png" alt="brand" className="h-8 w-auto" />
          </div>

          {/* Burger Menu for Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="focus:outline-none text-black"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Dropdown Menu for Mobile */}
        {isOpen && (
          <div className="">
            <div className="flex justify-center font-inter mb-4 w-full">
              <Dropdownx />
            </div>
            <ul className="md:hidden bg-white w-full space-y-2 pb-5 px-6 shadow-lg">
              <li
                className={`flex items-center font-semibold p-1 text-sm ${
                  isActive("repositories")
                    ? "bg-blue-500 text-white rounded-md"
                    : "hover:bg-gray-100 active:bg-blue-500 active:text-white hover:cursor-pointer rounded-md"
                }`}
                onClick={() => handleItemClick("repositories")}
              >
                <FolderIcon className="h-5 w-5 mr-2" />
                Repositories
              </li>
              <li
                className={`flex items-center font-semibold p-1 text-sm ${
                  isActive("ai-code-review")
                    ? "bg-blue-500 text-white rounded-md"
                    : "hover:bg-gray-100 active:bg-blue-500 active:text-white hover:cursor-pointer rounded-md"
                }`}
                onClick={() => handleItemClick("ai-code-review")}
              >
                <CodeBracketSquareIcon className="h-5 w-5 mr-2" />
                AI Code Review
              </li>
              <li
                className={`flex items-center font-semibold p-1 text-sm ${
                  isActive("cloud-security")
                    ? "bg-blue-500 text-white rounded-md"
                    : "hover:bg-gray-100 active:bg-blue-500 active:text-white hover:cursor-pointer rounded-md"
                }`}
                onClick={() => handleItemClick("cloud-security")}
              >
                <ShieldCheckIcon className="h-5 w-5 mr-2" />
                Cloud Security
              </li>
              <li
                className={`flex items-center font-semibold p-1 text-sm ${
                  isActive("how-to-use")
                    ? "bg-blue-500 text-white rounded-md"
                    : "hover:bg-gray-100 active:bg-blue-500 active:text-white hover:cursor-pointer rounded-md"
                }`}
                onClick={() => handleItemClick("how-to-use")}
              >
                <InformationCircleIcon className="h-5 w-5 mr-2" />
                How to Use
              </li>
              <li
                className={`flex items-center font-semibold p-1 text-sm ${
                  isActive("settings")
                    ? "bg-blue-500 text-white rounded-md"
                    : "hover:bg-gray-100 active:bg-blue-500 active:text-white hover:cursor-pointer rounded-md"
                }`}
                onClick={() => handleItemClick("settings")}
              >
                <Cog8ToothIcon className="h-5 w-5 mr-2" />
                Settings
              </li>
              <li
                className={`flex items-center font-semibold p-1 text-sm ${
                  isActive("support")
                    ? "bg-blue-500 text-white rounded-md"
                    : "hover:bg-gray-100 active:bg-blue-500 active:text-white hover:cursor-pointer rounded-md"
                }`}
                onClick={() => handleItemClick("support")}
              >
                <LifebuoyIcon className="h-5 w-5 mr-2" />
                Support
              </li>
              <li
                className={`flex items-center font-semibold p-1 text-sm ${
                  isActive("logout")
                    ? "bg-red-500 text-white rounded-md"
                    : "hover:bg-gray-100 active:bg-red-500 active:text-white hover:cursor-pointer rounded-md"
                }`}
                onClick={() => handleItemClick("logout")}
              >
                <ArrowLeftOnRectangleIcon className="h-5 w-5 mr-2" />
                Logout
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
