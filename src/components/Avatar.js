import React from "react";
import axios from "axios";

const fetchProfileInfo = () => {
  axios.get("https://randomuser.me/api/").then((response) => {
    console.log(response.data.results.pictureUrl);
  });
};
fetchProfileInfo();

const Avatar = () => {
  return <div>Avatar</div>;
};

export default Avatar;
