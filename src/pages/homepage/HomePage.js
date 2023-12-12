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
  return (
    <div>
      <Avatar userDetails={userDetails} />
      <p>{name.first}</p>
    </div>
  );
};

export default HomePage;
