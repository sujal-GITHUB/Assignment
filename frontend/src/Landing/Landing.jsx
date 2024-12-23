import React from 'react';
import ToggleSwitch from '../components/ToggleButton/ToggleSwitch';
import CombinedStatsCard from '../components/StatsCards/CombinedStatsCard';

function Landing() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen overflow-y-auto">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 bg-custom-bcg bg-left-bottom bg-no-repeat flex flex-col items-center justify-center relative order-1 lg:order-1 hidden sm:flex">
        {/* Wrapper to overlap the cards */}
        <div className="relative w-full min-h-screen flex items-center justify-center">
          <CombinedStatsCard />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 py-6 order-2 lg:order-2">
        <div className="flex flex-col items-center justify-center bg-white border border-gray-200 py-5 rounded-lg w-full sm:w-[400px] md:w-[500px]">
          <img src="/logo.png" alt="CodeAnt AI Logo" className="w-[150px] sm:w-[200px] mb-7" />
          <h1 className="text-xl sm:text-2xl font-semibold mb-5 text-center">Welcome to CodeAnt AI</h1>
          <ToggleSwitch />
        </div>
        <h3 className="mt-7 font-inter text-center text-sm sm:text-base">
          By signing up you agree to the <b>Privacy Policy.</b>
        </h3>
      </div>
    </div>
  );
}

export default Landing;
