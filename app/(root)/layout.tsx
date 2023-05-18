"use client";
import { Badge } from "@/components/core";
import Image from "next/image";
import * as React from "react";
import styles from "./layout.module.scss";
import routesConfig from "@/config/route.config";
import { MenuLink } from "@/components/root";

export interface IRootLayoutProps {
  children: React.ReactNode;
}

const rootConstants = {
  title: "Bariatric",
  version: "v1.0.0",
};

export default function RootLayout(props: IRootLayoutProps) {
  const { children } = props;

  return (
    <div className={styles.appShell}>
      <div className={styles.navbar}>
        <div className={styles.header}>
          <div className={styles.headerContainer}>
            <div className={styles.headerTitle}>
              <div className={styles.imageContainer}>
                <Image
                  src="/BariatricLogo.png"
                  alt="Logo"
                  width={19.2}
                  height={34.2}
                  className="mr-4"
                />
              </div>
              <h3>{rootConstants.title}</h3>
            </div>
            <Badge>{rootConstants.version}</Badge>
          </div>
        </div>
        <div className={styles.menu}>
          <ul>
            {routesConfig.map((route) => (
              <MenuLink
                key={route.key}
                route={route}
              />
            ))}
          </ul>
        </div>
      </div>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
