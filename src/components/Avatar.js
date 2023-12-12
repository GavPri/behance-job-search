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
  if (!userDetails) {
    return <div>Loading...</div>;
  }
  // Destructure properties
  const { name, picture } = userDetails;
  return (
    <div className="flex p-4">
      <img src={picture.thumbnail} alt="" className="rounded-full" />
      <div className="flex flex-col items-start justify-between">
        <p>Hello,</p>
        {name.first}
      </div>
    </div>
  );
};

export default Avatar;
