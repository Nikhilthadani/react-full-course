import React, { useRef, useTransition } from "react";
import "../../styles/Searchbar.css";
import { RiSearch2Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { fetchUserById } from "../../store/users-slice";
import { useDispatch } from "react-redux";
const Searchbar = () => {
  const [isPending, startTransition] = useTransition();
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const naviagte = useNavigate();
  const handleUserSearch = () => {
    console.log(inputRef.current.value);
    naviagte(`/user/${inputRef.current.value}`);
    startTransition(() => {
      dispatch(fetchUserById(inputRef.current.value));
    });
  };

  return (
    <div className="searchbar-container">
      <input ref={inputRef} className="search-input" type="text" />
      <RiSearch2Fill
        onClick={handleUserSearch}
        size={20}
        className="search-icon"
      />
    </div>
  );
};

export default Searchbar;
