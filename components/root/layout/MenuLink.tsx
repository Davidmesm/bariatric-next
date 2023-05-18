"use state";
import { route } from "@/config/route.config";
import Link from "next/link";
import styles from "./MenuLink.module.scss";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import MenuChildLink from "./MenuChildLink";
import { usePathname } from "next/navigation";

export interface IMenuLinkProps {
  route: route;
}

export default function MenuLink(props: IMenuLinkProps) {
  const { route } = props;

  const pathname = usePathname();

  const [openChildren, setOpenChildren] = useState(false);
  const [active, setActive] = useState(false);

  const handleOpenChildrenClick = () => {
    setOpenChildren(!openChildren);
  };

  useEffect(() => {
    if (!route.children) {
      if(pathname === "/") {
        setActive(route.to === "/")
      }
      else if(route.to !== "/"){
        setActive(pathname.startsWith(route.to))
      } else {
        setActive(false)
      }
    }
  }, [pathname, route, setActive]);

  if (route.children) {
    return (
      <li className={`${styles.menuItem} ${active ? styles.active : ""}`}>
        <div
          className={`${styles.menuLinkContainer} ${
            openChildren ? styles.open : ""
          }`}
        >
          <button
            type="button"
            className={styles.menuButton}
            onClick={handleOpenChildrenClick}
          >
            {route.icon && (
              <span className={styles.iconContainer}>{route.icon}</span>
            )}
            <span>{route.label}</span>
            <span className={styles.chevron}>
              <ChevronRightIcon />
            </span>
          </button>
          <ul
            className={`${styles.childrenList} ${
              !openChildren && styles.hidden
            }`}
          >
            {route.children &&
              route.children.map((childrenRoute) => (
                <MenuChildLink
                  key={childrenRoute.key}
                  parentTo={route.to}
                  route={childrenRoute}
                  setOpen={setOpenChildren}
                  open={openChildren}
                />
              ))}
          </ul>
        </div>
      </li>
    );
  }

  return (
    <li className={`${styles.menuItem} ${active ? styles.active : ""}`}>
      <div className={styles.menuLinkContainer}>
        <Link href={route.to} className={styles.menuLink}>
          {route.icon && (
            <span className={styles.iconContainer}>{route.icon}</span>
          )}
          <span>{route.label}</span>
        </Link>
      </div>
    </li>
  );
}
