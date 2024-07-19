import styles from "./Project.module.css";
import React from "react";

export default function Project(props: { right: number }) {
  return (
    <div style={{ right: props.right }} className={styles.project}>

    </div>
  )
}