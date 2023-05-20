"use client";
import Loading from "@/app/loading";
import { routesConfig } from "@/config";
import { route } from "@/config/route.config";
import { useEffect, useState, ReactNode } from "react";
import styles from "./layout.module.scss";

export interface ICatalogLayoutProps {
  params: { catalogName: string };
  children: ReactNode;
}

export default function CatalogLayout(props: ICatalogLayoutProps) {
  const { params, children } = props;
  const [catalogRoute, setCatalogRoute] = useState<route | undefined>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let catalogs = routesConfig.find((route) => route.key === "catalog");

    if (catalogs && catalogs.children) {
      let currCatalog = catalogs.children.find(
        (c) => c.key === params.catalogName
      );

      if (currCatalog) {
        setCatalogRoute(currCatalog);
      }
    }

    setLoading(false);
  }, [params]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={styles.container}>
      <div>
        <h2>{catalogRoute ? catalogRoute.label : "Catalogo"}</h2>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export async function generateStaticParams() {
  let catalogs = routesConfig.find((route) => route.key === "catalog");

  if (catalogs && catalogs.children) {
    return catalogs.children.map((route) => ({
      catalogName: route.key,
    }));
  }

  return [];
}
