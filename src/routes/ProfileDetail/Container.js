import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProfileDetail from "./ProfileDetail";
import { getUserProducts, getUserProfile, getUserPost } from "../../api/api";

function ProfileDetailContainer({ history }) {
  const { accountname } = useParams();
  const [products, setProducts] = useState(null);
  const [profile, setProfile] = useState("");
  const [posts, setPosts] = useState(null);

  const getUserData = async (account) => {
    try {
      const userProfile = await (await getUserProfile(account)).json();
      const userProducts = await (await getUserProducts(account)).json();
      const userPosts = await (await getUserPost(account)).json();
      setProducts(userProducts.product);
      setProfile(userProfile.profile);
      setPosts(userPosts.post);

      if (userProfile.status === "404") {
        history.push("/404");
      }
    } catch (err) {
      if (err.state === "404") {
        history.push("/404");
      }
    }
  };

  useEffect(() => {
    getUserData(accountname);
  }, [accountname]);

  return <ProfileDetail products={products} profile={profile} posts={posts} />;
}

export default ProfileDetailContainer;
