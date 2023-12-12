import React, { useState, useEffect } from "react";
import Avatar from "../../components/Avatar";
import axios from "axios";

const HomePage = () => {
  const [userDetails, setUserDetails] = useState(null);

  const fetchProfileInfo = () => {
    axios.get("https://randomuser.me/api/").then((response) => {
      const user = response.data.results[0];
      setUserDetails(user);
    });
  };

  useEffect(() => {
    fetchProfileInfo();
  }, []);

  // Check if userDetails is available before rendering
  if (!userDetails) {
    return <div>Loading...</div>;
  }
  // Destructure properties
  const { name, picture } = userDetails;
  // RenderSVG
  const renderNotificationsSVG = () => {
    return (
      <div className="ml-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-off-white mr-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
          />
        </svg>
      </div>
    );
  };
  const renderGreeting = () => {
    return (
      <div className="flex flex-col justify-between items-start">
        <p className="text-off-white">Good Morning</p>
        <p className="font-bold text-off-white">{name.first}</p>
      </div>
    );
  };
  return (
    <div className="flex items-center w-full">
      <Avatar userDetails={userDetails} />
      {renderGreeting()}
      {renderNotificationsSVG()}
    </div>
  );
};

export default HomePage;
