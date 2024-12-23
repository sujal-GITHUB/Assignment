import React, { useState } from "react";
import SignInOptions1 from "../SignInOptions1/SigninOptions1";
import SignInOptions2 from "../SignInOptions2/SignInOptions2";

const ToggleSwitch = () => {
  const [selected, setSelected] = useState("SAAS");

  return (
    <div className="flex flex-col items-center w-full">
      {/* Toggle Switch */}
      <div className="relative flex items-center w-11/12 h-10 mb-4 bg-gray-50 rounded-md border border-gray-300">
        {/* Sliding background */}
        <div
          className={`absolute top-0 left-0 w-1/2 h-full bg-blue-600 rounded-md transition-transform duration-300 ${
            selected === "SAAS" ? "translate-x-0" : "translate-x-full"
          }`}
        ></div>

        {/* SAAS Button */}
        <button
          onClick={() => setSelected("SAAS")}
          className={`relative z-10 flex-1 flex items-center justify-center text-center font-semibold transition-colors duration-300 ${
            selected === "SAAS" ? "text-white" : "text-gray-600"
          }`}
        >
          SAAS
        </button>

        {/* Self Hosted Button */}
        <button
          onClick={() => setSelected("Self Hosted")}
          className={`relative z-10 flex-1 flex items-center justify-center text-center font-semibold transition-colors duration-300 ${
            selected === "Self Hosted" ? "text-white" : "text-gray-600"
          }`}
        >
          Self Hosted
        </button>
      </div>

      <hr className="my-4 w-full border-gray-300" />

      <div className="w-11/12 mt-2">
        {selected === "SAAS" ? <SignInOptions1 /> : <SignInOptions2 />}
      </div>
    </div>
  );
};

export default ToggleSwitch;
