import { useState, createContext } from "react";

export const UserProfileContext = createContext({});

export const UserProfileProvider = ({ children }) => {
  const [userProfileData, setUserProfileData] = useState([]);

  return (
    <UserProfileContext.Provider
      value={{
        userProfileData,
        setUserProfileData,
      }}
    >
      {children}
    </UserProfileContext.Provider>
  );
};
