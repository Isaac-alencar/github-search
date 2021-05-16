import { Star } from "@styled-icons/fluentui-system-filled";
import { GitBranch, LinkExternal } from "@styled-icons/boxicons-regular";
import { FileEarmarkCodeFill } from '@styled-icons/bootstrap/FileEarmarkCodeFill'

import styles from "../styles/components/RepositoryCard.module.scss";

export function RepositoryCard() {
  return (
    <div className={styles.container}>
      <div>
        <strong>moveit</strong>
        <span>Projecte developed on NLW #4</span>
      </div>

      <div className={styles.aboutRepo}>
        <div>
					<Star size={20} color="var(--purple)" />
          <span>9815</span>
        </div>
				<div>
					<GitBranch size={20} color="var(--purple)" />
          <span>5</span>
        </div>
				<div>
					<FileEarmarkCodeFill size={20} color="var(--purple)" />
          <span>Typescript</span>
        </div>
				<div>
					<LinkExternal size={20} color="var(--purple)" />
        </div>
      </div>
    </div>
  );
}
