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
  
  return <div>Avatar</div>;
};

export default Avatar;
