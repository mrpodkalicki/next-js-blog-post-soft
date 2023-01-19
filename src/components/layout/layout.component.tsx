import { FC } from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { LayoutType } from "@/components/layout/layout.type";
import SeoComponent from "@/components/SEO";

const LayoutComponent: FC<LayoutType> = ({ children, seoData }: LayoutType) => (
  <>
    <Head>
      <title> Next App</title>
      <SeoComponent {...seoData} />
    </Head>
    <main className={styles.main}>
      <div className="container mx-auto">{children}</div>
    </main>
  </>
);

export default LayoutComponent;
