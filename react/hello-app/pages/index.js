import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Typo from "../components/Typo";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
     <Typo/>
    </div>
  );
}
