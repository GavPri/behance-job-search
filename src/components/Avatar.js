import React from "react";
import axios from "axios";

const fetchProfileInfo = () => {
  axios.get("https://jsonplaceholder.typicode.com/users/1").then((response) => {
    console.log(response);
  });
};
fetchProfileInfo();

const Avatar = () => {
  return <div>Avatar</div>;
};

export default Avatar;
