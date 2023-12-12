import React, { Children, useEffect, useState } from "react";
import axios from "axios";

const Avatar = ({userDetails}) => {
  const {picture} = userDetails
  return (
    <div className="flex p-4 text-off-white">
      <img src={picture.thumbnail} alt="" className="rounded-full mr-4 h-12" />
    </div>
  );
};

export default Avatar;
