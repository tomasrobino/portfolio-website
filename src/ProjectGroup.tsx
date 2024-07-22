import ProjectUnit from "./ProjectUnit.tsx";
import React, {useEffect, useRef, useState} from "react";
import styles from "./ProjectGroup.module.css"

export default function ProjectGroup() {
  const groupRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  function intersect(entries: IntersectionObserverEntry[]) {
    const [entry]: IntersectionObserverEntry[] = entries;
    setInView(entry.isIntersecting);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(intersect, { root: null, rootMargin: "0px", threshold: 1.0 })
    if (groupRef.current) observer.observe(groupRef.current);

    return () => {
      if (groupRef.current) observer.unobserve(groupRef.current);
    }
  }, [groupRef])

  return (
    <div>
      {inView ? "Yes" : "No"}
      <h1 className={styles.title}>Projects</h1>
      <div ref={groupRef} className={styles.cardGroup}>

        <ProjectUnit image={"https://picsum.photos/1000"} title={"Example project"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum dictum nisi, eget vestibulum mi tempus sit amet. Nulla lobortis elementum mauris, et auctor sapien condimentum mattis."}/>
        <ProjectUnit image={"https://picsum.photos/200"} title={"Example project"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum dictum nisi, eget vestibulum mi tempus sit amet. Nulla lobortis elementum mauris, et auctor sapien condimentum mattis."}/>
        <ProjectUnit image={"https://picsum.photos/200"} title={"Example project"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum dictum nisi, eget vestibulum mi tempus sit amet. Nulla lobortis elementum mauris, et auctor sapien condimentum mattis."}/>
      </div>
    </div>
  )
}
