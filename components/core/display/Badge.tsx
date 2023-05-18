import { ReactNode } from "react";
import styles from "./Badge.module.scss"

export interface IBadgeProps {
  children: ReactNode;
}

export default function Badge(props: IBadgeProps) {
  const { children } = props;

  return <span className={styles.badge}>{children}</span>;
}
