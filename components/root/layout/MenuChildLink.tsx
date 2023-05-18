'use client'
import { route } from "@/config/route.config";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import styles from "./MenuLink.module.scss";

export interface IMenuChildLinkProps {
  parentTo: string;
  route: route;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
}

export default function MenuChildLink(props: IMenuChildLinkProps) {
  const { parentTo, route, setOpen, open } = props;

  const pathname = usePathname();

  const [active, setActive] = useState(false);

  const childRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    setActive(pathname.startsWith(parentTo + route.to))
  }, [parentTo, pathname, route, setActive]);

  useEffect(() => {
    if(active) {
      setOpen(true)
    }
  }, [active, setOpen])

  useEffect(() => {
    if(active && open) {
      if(childRef.current) {
        childRef.current.focus()
        childRef.current.scrollIntoView()
      }
    }
  }, [active, open])
  

  return (
    <li ref={childRef} className={`${styles.menuChildItem} ${active ? styles.selected : ""}`}>
      <div className={styles.menuChildLink}>
        <Link href={`${parentTo}${route.to}`}>{route.label}</Link>
      </div>
    </li>
  );
}
