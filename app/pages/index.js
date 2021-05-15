import { useState, useContext } from "react";

import api from "../services/api";

import { UserProfileContext } from "../contexts/userProfileContext";

import styles from "../styles/pages/Home.module.scss";

export default function Home() {
  const [inputvalue, setInputValue] = useState("");
  const { setUserProfileData } = useContext(UserProfileContext);

  async function handleSearchUser(event) {
    event.preventDefault();

    const response = await api.get(`${inputvalue}`);
    if (response.status === 200) {
      setUserProfileData(response.data);
    }
  }

  return (
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
  );
}
