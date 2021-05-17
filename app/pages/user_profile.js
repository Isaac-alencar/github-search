import { useContext } from "react";
import { UserProfileContext } from "../contexts/userProfileContext";

import { useRouter } from "next/router";
import Head from "next/head";

import { RepositoryCard } from "../components/RepositoryCard";

import { ArrowLeft } from "@styled-icons/heroicons-outline/ArrowLeft";
import { LocationOn } from "@styled-icons/material/LocationOn";
import {
  Toolbox,
  PeopleTeam,
  Star,
} from "@styled-icons/fluentui-system-filled";
import { PeopleTeam as PeaopleTeamRegular } from "@styled-icons/fluentui-system-regular/PeopleTeam";
import { GitBranch } from "@styled-icons/boxicons-regular/GitBranch";
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare";
import { Github } from "@styled-icons/icomoon/Github";

import styles from "../styles/pages/UserProfile.module.scss";

export default function UserProfile() {
  const history = useRouter();

  const { userProfileData } = useContext(UserProfileContext);
  const { user, repos } = userProfileData;

  return (
    <>
      <Head>
        <title>Github serach | User Profile</title>
      </Head>
      <div className={styles.container}>
        <header>
          <img src="/assets/logo-horizontal.svg" alt="Github Search" />
          <ArrowLeft
            color="var(--white)"
            height={40}
            width={40}
            onClick={() => history.push("/")}
            style={{ cursor: "pointer" }}
          />
        </header>
        <div className={styles.userInfoContainer}>
          <img src={user.avatar_url} alt={user.name} />
          <div className={styles.userProfileInfo}>
            <div>
              <strong>{user.name}</strong>
              <span>
                @{user.twitter_username || "No twitter account especified"}
              </span>
            </div>
            <div className={styles.aboutUser}>
              <div>
                <LocationOn color="var(--purple)" size={24} />
                <span>{user.location}</span>
              </div>
              <div>
                <Toolbox color="var(--purple)" size={24} />
                <span>{user.company || "Company not especified"}</span>
              </div>
              <div>
                <PeopleTeam color="var(--purple)" size={24} />
                <span>{user.followers}</span>
              </div>
              <div>
                <PeaopleTeamRegular color="var(--purple)" size={24} />
                <span>{user.following}</span>
              </div>
              <div>
                <Star color="var(--purple)" size={24} />
                <span>Estrelas</span>
              </div>
            </div>
          </div>
          <div className={styles.totalRepositories}>
            <span>Total Repositories</span>
            <span>
              <GitBranch size={25} color="var(--purple)" />
              {user.public_repos}
            </span>
          </div>
        </div>
        <main className={styles.repositoriesList}>
          {repos &&
            repos.map((repo) => {
              return (
                <RepositoryCard
                  key={repo.id}
                  url={repo.html_url}
                  stars={repo.stargazers_count}
                  name={repo.name}
                  description={repo.description}
                  languages=""
                  forks={repo.forks}
                />
              );
            })}
        </main>
        <footer className={styles.footer}>
          <Github
            color="var(--gray)"
            size={30}
            onClick={() => window.open(user.html_url, "_blank")}
          />
          <LinkedinSquare
            color="var(--gray)"
            size={35}
            onClick={() => window.open(user.blog, "_blank")}
          />
        </footer>
      </div>
    </>
  );
}
