import React from "react";

const SignInOptions1 = () => {
  const options = [
    {
      id: 1,
      icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png", // GitHub Icon URL
      label: "Sign in with GitHub",
    },
    {
      id: 2,
      icon: "https://w7.pngwing.com/pngs/404/31/png-transparent-bitbucket-icon-hd-logo.png", // Bitbucket Icon URL
      label: "Sign in with Bitbucket",
    },
    {
      id: 3,
      icon: "https://www.svgrepo.com/show/448271/azure-devops.svg", // Azure DevOps Icon URL
      label: "Sign in with Azure DevOps",
    },
    {
      id: 4,
      icon: "https://cdn-icons-png.flaticon.com/512/5968/5968853.png", // GitLab Icon URL
      label: "Sign in with GitLab",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {options.map((option) => (
        <button
          key={option.id}
          className="flex items-center justify-center gap-4 px-4 py-3 border rounded-lg hover:bg-gray-100 transition duration-300"
        >
          <img src={option.icon} alt={`${option.label} Icon`} className="w-6 h-6" />
          <span className="text-gray-800 font-semibold text-sm font-inter">{option.label}</span>
        </button>
      ))}
    </div>
  );
};

export default SignInOptions1;
