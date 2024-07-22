import styles from "./App.module.css";
import ProjectUnit from "./ProjectUnit.tsx";
import React from "react";

export default function ProjectGroup() {
  return (
    <div>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.cardGroup}>
        <ProjectUnit image={"https://picsum.photos/1000"} title={"Example project"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum dictum nisi, eget vestibulum mi tempus sit amet. Nulla lobortis elementum mauris, et auctor sapien condimentum mattis."}/>
        <ProjectUnit image={"https://picsum.photos/200"} title={"Example project"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum dictum nisi, eget vestibulum mi tempus sit amet. Nulla lobortis elementum mauris, et auctor sapien condimentum mattis."}/>
        <ProjectUnit image={"https://picsum.photos/200"} title={"Example project"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum dictum nisi, eget vestibulum mi tempus sit amet. Nulla lobortis elementum mauris, et auctor sapien condimentum mattis."}/>
      </div>
    </div>
  )
}
