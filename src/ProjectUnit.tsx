import styles from "./ProjectUnit.module.css";
import React from "react";

export default function ProjectUnit(props: { title: string, image: string, description: string }) {
  return (
    <div className={styles.proj}>
      <img src={props.image} alt={props.title} className={styles.img}/>
      <div className={styles.titleNDesc}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  )
}