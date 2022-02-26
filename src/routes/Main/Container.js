import React, { useState, useEffect } from "react";
import { getFollowingFeedAPI } from "../../api/api";
import GuestMain from "../../components/GuestMain/GuestMain";
import Main from "./Main";

export default function MainContainer() {
  const [following, setFollowing] = useState([]);

  useEffect(() => {
    const getMyFollowings = async () => {
      try {
        const getFeeds = await (await getFollowingFeedAPI()).json();
        setFollowing(getFeeds.posts);
      } catch (error) {
        console.log(error);
      }
    };
    getMyFollowings();
  }, []);

  if (following.length === 0) {
    return <GuestMain />;
  }

  return <Main following={following} />;
}
