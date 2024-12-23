import React, { useState } from "react";
import {
  PlusIcon,
  ArrowPathIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const repositories = [
  {
    name: "design-system",
    visibility: "Public",
    language: "React",
    size: "7320 KB",
    lastUpdated: "1 day ago",
    collaborators: 3,
  },
  {
    name: "codeant-ci-app",
    visibility: "Private",
    language: "Javascript",
    size: "5871 KB",
    lastUpdated: "2 days ago",
    collaborators: 2,
  },
  {
    name: "analytics-dashboard",
    visibility: "Private",
    language: "Python",
    size: "4521 KB",
    lastUpdated: "5 days ago",
    collaborators: 3,
  },
  {
    name: "mobile-app",
    visibility: "Public",
    language: "Swift",
    size: "3096 KB",
    lastUpdated: "3 days ago",
    collaborators: 1,
  },
  {
    name: "e-commerce-platform",
    visibility: "Private",
    language: "Java",
    size: "6210 KB",
    lastUpdated: "6 days ago",
    collaborators: 2,
  },
  {
    name: "blog-website",
    visibility: "Public",
    language: "HTML/CSS",
    size: "1876 KB",
    lastUpdated: "4 days ago",
    collaborators: 0,
  },
  {
    name: "social-network",
    visibility: "Private",
    language: "PHP",
    size: "5432 KB",
    lastUpdated: "7 days ago",
    collaborators: 0,
  },
];

const RepositoryDashboard = () => {
  const [selectedRepo, setSelectedRepo] = useState(null);

  const handleRepoClick = (repo) => {
    setSelectedRepo(repo);
    console.log("Selected Repository:", repo);
  };

  return (
    <div className="dashboard-container">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-4 sm:px-6 pt-4 sm:pt-6 header-section">
        <div>
          <h1 className="text-lg sm:text-xl text-start font-inter font-semibold">
            Repositories
          </h1>
          <p className="text-gray-600 font-inter text-xs sm:text-sm">
            {repositories.length} total repositories
          </p>
        </div>
        <div className="flex gap-2 mt-4 mb-4 md:mb-0">
          <button className="flex items-center gap-2 px-2 py-1 text-[8px] sm:text-[10px] md:text-sm border rounded-lg hover:bg-gray-50">
            <ArrowPathIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
            Refresh All
          </button>
          <button className="flex items-center gap-2 px-2 py-1 text-[8px] sm:text-[10px] md:text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <PlusIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            Add Repository
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-4 px-4 sm:px-6 py-2 search-section">
        <div className="flex items-center border rounded-md search-bar">
          <MagnifyingGlassIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500 ml-2" />
          <input
            type="text"
            placeholder="Search Repositories"
            className="w-full font-inter text-[10px] sm:text-sm p-1 sm:p-2 outline-none"
          />
        </div>
      </div>

      {/* Repository List */}
      <div className="font-inter font-medium repository-list">
        {repositories.map((repo) => (
          <div
            key={repo.name}
            className="rounded-lg bg-white shadow-sm cursor-pointer hover:bg-gray-100"
            onClick={() => handleRepoClick(repo)}
          >
            <hr className="w-full border-gray-300" />
            <div className="flex py-3 sm:py-4 justify-between px-4 sm:px-6 items-center">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-base sm:text-lg font-bold font-inter">
                    {repo.name}
                  </h2>
                  <span className="px-2 sm:px-3 py-1 text-[8px] sm:text-xs bg-blue-50 text-blue-400 border border-blue-200 rounded-full">
                    {repo.visibility}
                  </span>
                </div>
                <div className="flex items-center gap-5 sm:gap-7 mt-1 sm:mt-2 text-[10px] sm:text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    {repo.language}
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  </div>
                  <div className="flex items-center font-medium gap-2">
                    <FontAwesomeIcon
                      icon={faDatabase}
                      className="text-gray-500 w-2 h-4"
                    />
                    <div>{repo.size}</div>
                  </div>
                  <div>Updated {repo.lastUpdated}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Responsive CSS */}
      <style>
        {`
          /* For smaller screens */
          @media (max-width: 768px) {
            .search-section {
              padding: 0 1rem;
            }
            .search-bar {
              width: 100%;
            }
            .repository-list {
              grid-template-columns: 1fr;
            }
          }

          /* For medium screens */
          @media (min-width: 769px) and (max-width: 1024px) {
            .repository-list {
              grid-template-columns: 1fr 1fr;
            }
          }
        `}
      </style>
    </div>
  );
};

export default RepositoryDashboard;
