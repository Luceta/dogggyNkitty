import React, { useState } from "react";
import Search from "./Search";
import { searchUserAPI } from "../../api/api";

function SearchContainer() {
  const [users, setUsers] = useState(null);
  const [keywords, setKeywords] = useState("");

  const getSearchUserData = async (value) => {
    const response = await searchUserAPI(value);
    const result = await response.json();
    return result;
  };

  const searchUsers = (keyword) => {
    const getUserData = async () => {
      try {
        const userData = await getSearchUserData(keyword);
        setUsers(userData);
      } catch (error) {
        console.log(error);
      }
    };
    getUserData();
  };
  return <Search onSearch={searchUsers} users={users} keywords={keywords} setKeywords={setKeywords} />;
}

export default SearchContainer;
