import "../styles/global.scss";

import { UserProfileProvider } from "../contexts/userProfileContext";

function MyApp({ Component, pageProps }) {
  return (
    <UserProfileProvider>
      <Component {...pageProps} />
    </UserProfileProvider>
  );
}

export default MyApp;
