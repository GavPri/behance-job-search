import React from "react";
import axios from "axios";

const fetchProfileInfo = () => {
  axios.get("https://randomuser.me/api/").then((response) => {
    const user = response.data.results[0];
    const userPicture = user.picture.medium;
    
  });
};
fetchProfileInfo();

const Avatar = () => {
  return <div>Avatar</div>;
};

export default Avatar;
