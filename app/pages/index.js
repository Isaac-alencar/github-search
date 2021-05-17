import { useState, useContext } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import api from "../services/api";

import { UserProfileContext } from "../contexts/userProfileContext";

import styles from "../styles/pages/Home.module.scss";

export default function Home() {
  const [inputvalue, setInputValue] = useState("");
  const { setUserProfileData } = useContext(UserProfileContext);

  const history = useRouter();

  async function handleSearchUser(event) {
    event.preventDefault();

    try {
      const userInfo = await api.get(`/${inputvalue}`);
      const reposInfo = await api.get(`/${inputvalue}/repos`);
      setUserProfileData({ user: userInfo.data, repos: reposInfo.data });
      history.push("user_profile");
    } catch (error) {
      alert("User not found");
      console.log(error);
    }
  }

  return (
    <>
      <Head>
        <title>Github Search</title>
      </Head>
      <div className={styles.container}>
        <img src="/assets/logo-vertical.svg" alt="Github search" />
        <div className={styles.inputContainer}>
          <input
            type="text"
            placeholder="Enter user name"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputvalue}
            required
          />
          <button type="button" onClick={(e) => handleSearchUser(e)}>
            Search
          </button>
        </div>
      </div>
    </>
  );
}
