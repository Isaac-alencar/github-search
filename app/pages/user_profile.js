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
  return (
    <>
      <Head>
        <title>Github serach | User Profile</title>
      </Head>
      <div className={styles.container}>
        <header>
          <img src="/assets/logo-horizontal.svg" alt="Github Search" />
          <ArrowLeft color="var(--white)" height={40} width={40} />
        </header>
        <div className={styles.userInfoContainer}>
          <img src="https://github.com/juniperlRails.png" alt="juniperlRails" />
          <div className={styles.userProfileInfo}>
            <div>
              <strong>juniperlRails</strong>
              <span>@isac</span>
            </div>
            <div className={styles.aboutUser}>
              <div>
                <LocationOn color="var(--purple)" size={24} />
                <span>Teresina - Brazil</span>
              </div>
              <div>
                <Toolbox color="var(--purple)" size={24} />
                <span>emprego</span>
              </div>
              <div>
                <PeopleTeam color="var(--purple)" size={24} />
                <span>Seguidores</span>
              </div>
              <div>
                <PeaopleTeamRegular color="var(--purple)" size={24} />
                <span>Seguindo</span>
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
              28
            </span>
          </div>
        </div>
        <main className={styles.repositoriesList}>
          <RepositoryCard />
          <RepositoryCard />
          <RepositoryCard />
        </main>
        <footer className={styles.footer}>
          <Github color="var(--gray)" size={30} />
          <LinkedinSquare color="var(--gray)" size={35} />
        </footer>
      </div>
    </>
  );
}
