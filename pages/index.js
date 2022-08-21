import React, { useEffect } from "react";
import styles from "../styles/Home.module.css";
import HeadComponent from "../components/Head/Head";
import Ar from "../components/Ar/Ar";
export default function Home() {
  return (
    <div className={"container"} id='ar'>
      {/* <HeadComponent /> */}
      <Ar />
    </div>
  );
}
