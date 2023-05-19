import React from "react";
import { useSelector } from "react-redux";

const UserImage = (props) => {
  const { pic } = props;
  //console.log(pic);
  return (
    <div className="userImageMain">
      <img
        src={pic}
        alt="new"
        width="60px"
        height="60px"
        style={{ cursor: "pointer", borderRadius: "50%" }}
      />
    </div>
  );
};

export default UserImage;
