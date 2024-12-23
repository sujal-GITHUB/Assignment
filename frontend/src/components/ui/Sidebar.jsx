import React, { useState } from "react";
import { Card } from "@material-tailwind/react";
import Dropdownx from "./Dropdownx";
import {
  FolderIcon,
  CodeBracketSquareIcon,
  ShieldCheckIcon,
  InformationCircleIcon,
  Cog8ToothIcon,
  LifebuoyIcon, // Icon for Support
  ArrowLeftOnRectangleIcon, // Icon for Logout
} from "@heroicons/react/24/solid";

const List = ({ children, className = "" }) => {
  return <ul className={`space-y-2 ${className}`}>{children}</ul>;
};

const ListItem = ({ children, className = "", onClick }) => {
  return (
    <li
      className={`flex items-center p-2 m-2 cursor-pointer transition-all rounded-lg ${className}`}
      onClick={onClick}
    >
      {children}
    </li>
  );
};

const ListItemPrefix = ({ children }) => {
  return <span className="mr-3">{children}</span>;
};

function Sidebar() {
  const [activeItem, setActiveItem] = useState("");

  const handleItemClick = (item) => {
    setActiveItem(item);
    console.log(`Clicked on: ${item}`);
  };

  const isActive = (item) => activeItem === item;

  return (
    <Card className="h-screen rounded-none w-full max-w-[15rem] px-2 overflow-hidden">
      {/* Brand Logo */}
      <div className="flex justify-center items-center gap-4 p-4">
        <img src="logo.png" alt="brand" width={200} />
      </div>

      {/* User Dropdown */}
      <div className="flex justify-center font-inter w-full">
        <Dropdownx />
      </div>

      {/* Navigation List */}
      <div className="p-3 flex flex-col justify-between h-[calc(100%-120px)]">
        <List className="">
          <ListItem
            className={`font-inter hover:bg-gray-300 font-semibold text-sm ${
              isActive("repositories") ? "bg-blue-500 hover:bg-blue-500 text-white" : ""
            }`}
            onClick={() => handleItemClick("repositories")}
          >
            <ListItemPrefix>
              <FolderIcon className="h-5 w-5" />
            </ListItemPrefix>
            Repositories
          </ListItem>
          <ListItem
            className={`font-inter hover:bg-gray-300 font-semibold text-sm ${
              isActive("ai-code-review") ? "bg-blue-500 hover:bg-blue-500 text-white" : ""
            }`}
            onClick={() => handleItemClick("ai-code-review")}
          >
            <ListItemPrefix>
              <CodeBracketSquareIcon className="h-5 w-5" />
            </ListItemPrefix>
            AI Code Review
          </ListItem>
          <ListItem
            className={`font-inter hover:bg-gray-300 font-semibold text-sm ${
              isActive("cloud-security") ? "bg-blue-500 hover:bg-blue-500 text-white" : ""
            }`}
            onClick={() => handleItemClick("cloud-security")}
          >
            <ListItemPrefix>
              <ShieldCheckIcon className="h-5 w-5" />
            </ListItemPrefix>
            Cloud Security
          </ListItem>
          <ListItem
            className={`font-inter hover:bg-gray-300 font-semibold text-sm ${
              isActive("how-to-use") ? "bg-blue-500 hover:bg-blue-500 text-white" : ""
            }`}
            onClick={() => handleItemClick("how-to-use")}
          >
            <ListItemPrefix>
              <InformationCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            How to Use
          </ListItem>
          <ListItem
            className={`font-inter hover:bg-gray-300 font-semibold text-sm ${
              isActive("settings") ? "bg-blue-500 hover:bg-blue-500 text-white" : ""
            }`}
            onClick={() => handleItemClick("settings")}
          >
            <ListItemPrefix>
              <Cog8ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Settings
          </ListItem>
        </List>

        {/* Support and Logout at the Bottom */}
        <List>
          <ListItem
            className={`font-inter hover:bg-gray-300 font-semibold text-sm ${
              isActive("support") ? "bg-blue-500 hover:bg-blue-500 text-white" : ""
            }`}
            onClick={() => handleItemClick("support")}
          >
            <ListItemPrefix>
              <LifebuoyIcon className="h-5 w-5" />
            </ListItemPrefix>
            Support
          </ListItem>
          <ListItem
            className={`font-inter hover:bg-red-500 hover:text-white font-semibold text-sm ${
              isActive("logout") ? "bg-red-500 hover:bg-red-500 text-white" : ""
            }`}
            onClick={() => handleItemClick("logout")}
          >
            <ListItemPrefix>
              <ArrowLeftOnRectangleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Logout
          </ListItem>
        </List>
      </div>
    </Card>
  );
}

export default Sidebar;
