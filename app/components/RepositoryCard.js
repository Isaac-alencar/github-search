import { useRouter } from "next/router";

import { Star } from "@styled-icons/fluentui-system-filled";
import { GitBranch, LinkExternal } from "@styled-icons/boxicons-regular";
import { FileEarmarkCodeFill } from "@styled-icons/bootstrap/FileEarmarkCodeFill";

import styles from "../styles/components/RepositoryCard.module.scss";

export function RepositoryCard({
  url,
  stars,
  name,
  description,
  languages,
  forks,
}) {
  return (
    <div className={styles.container}>
      <div>
        <strong>{name}</strong>
        <span>{description}</span>
      </div>

      <div className={styles.aboutRepo}>
        <div>
          <Star size={20} color="var(--purple)" />
          <span>{stars}</span>
        </div>
        <div>
          <GitBranch size={20} color="var(--purple)" />
          <span>{forks}</span>
        </div>
        <div>
          <FileEarmarkCodeFill size={20} color="var(--purple)" />
          <span>{languages}</span>
        </div>
        <div>
          <LinkExternal
            size={20}
            color="var(--purple)"
            onClick={() => window.open(`${url}`, "_blank")}
          />
        </div>
      </div>
    </div>
  );
}
