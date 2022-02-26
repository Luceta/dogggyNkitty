/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from "react";
import { getMyFollowingListAPI, getMyFollowerListAPI, followAPI, unFollowAPI } from "../../api/api";
import MySnsList from "./MySnsList";

export default function MySnsListContainer({ match }) {
  const checkPath = match.url.split("/")[3];
  const { accountname } = match.params;

  const [userList, setUserList] = useState([]);
  const [title, setTitle] = useState("");

  async function getLists(account, path) {
    if (path === "following") {
      const followings = await (await getMyFollowingListAPI(account)).json();
      setUserList(followings);
    }

    if (path === "follower") {
      const followers = await (await getMyFollowerListAPI(account)).json();
      setUserList(followers);
    }
  }

  function makeTitle(path) {
    let pageTitle = "Followers";
    if (path === "following") {
      pageTitle = "Followings";
    }
    setTitle(pageTitle);
  }

  const onHandleClick = async (ev, user) => {
    const buttonText = ev.target.innerText;

    if (buttonText === "팔로우") {
      try {
        const result = await (await followAPI(user.accountname)).json();
        ev.target.classList.toggle("follow-button");
        ev.target.innerText = "취소";

        if (result.status === "404") {
          throw Error("accoutname is invalid");
        }
      } catch (error) {
        console.log(error);
      }
    }

    if (buttonText === "취소") {
      try {
        const result = await (await unFollowAPI(user.accountname)).json();
        ev.target.classList.toggle("follow-button");
        ev.target.innerText = "팔로우";

        if (result.status === "404") {
          throw Error("accoutname is invalid");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getLists(accountname, checkPath);
    makeTitle(checkPath);
  }, [checkPath]);
  return <MySnsList title={title} userList={userList} handleFollow={onHandleClick} />;
}
