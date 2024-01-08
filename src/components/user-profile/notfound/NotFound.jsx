import React from "react";
import { RxCrossCircled } from "react-icons/rx";
import { Link } from "react-router-dom";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

const NotFound = () => {
  return (
    <div className="user-not-found">
      <RxCrossCircled size={30} />
      <h3 className="user-not-found-title">User not found, Try Again</h3>
      <Link className="user-not-found-navlink" to={"/"}>
        <MdOutlineArrowBackIosNew size={30} /> Try Again From Homepage
      </Link>
    </div>
  );
};

export default NotFound;
