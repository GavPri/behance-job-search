import React, { useEffect, useState } from "react";
import axios from "axios";

const Avatar = () => {
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

  // Destructure properties

  return (
    <div>
      <div>First Name</div>
      <img src="" alt="" />
    </div>
  );
};

export default Avatar;
