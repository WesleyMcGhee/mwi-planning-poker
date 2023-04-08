import type { NextPage } from "next";
import Header from "../components/Header";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>MWI poker</title>
      </Head>
      <Header />
      <h1>Planning Poker</h1>
    </div>
  );
};

export default Home;
