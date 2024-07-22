import ProjectUnit from "./ProjectUnit.tsx";
import React, {useEffect, useRef, useState} from "react";
import styles from "./ProjectGroup.module.css";
import unitStyles from "./ProjectUnit.module.css";

export default function ProjectGroup() {
  const groupRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [selected, setSelected] = useState(0);


  function intersect(entries: IntersectionObserverEntry[]) {
    const [entry]: IntersectionObserverEntry[] = entries;
    setInView(entry.isIntersecting);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(intersect, { root: null, rootMargin: "0px", threshold: 1.0 })
    if (groupRef.current) observer.observe(groupRef.current);

    return () => {
      document.body.style.overflow = "visible";
      if (groupRef.current) observer.unobserve(groupRef.current);
    }
  }, [groupRef])

  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel as (ev: Event) => void);
    }
  })
  function handleWheel(event: WheelEvent) {
    /*
    if (!projectsRef.current) return;
    const bounds = projectsRef.current!.getBoundingClientRect();
    if (Math.floor(viewportPos) === Math.floor(bounds.top)) {
      document.body.style.overflow = "hidden";
      if (event.deltaY < 0) {
        setDivPos(divPos-80);
        if (divPos <= offsetRef.current) document.body.style.overflow = "auto";
      } else setDivPos(divPos+80);
    }

     */
    if (inView) {
      if (event.deltaY < 0 && selected > 0) {
        //Up
        console.log(document.getElementsByClassName(unitStyles.proj).length);
        setSelected(selected - 1);
        event.preventDefault();
      } else if (event.deltaY > 0 && selected < document.getElementsByClassName(unitStyles.proj).length-1) {
        //Down
        setSelected(selected+1);
        event.preventDefault();
      }
    }
  }

  return (
    <div>
      {inView ? "Yes" : "No"}
      <h1 className={styles.title}>Projects</h1>
      <div ref={groupRef} className={styles.cardGroup}>
        <ProjectUnit image={"https://picsum.photos/1000"} title={"Example project"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum dictum nisi, eget vestibulum mi tempus sit amet. Nulla lobortis elementum mauris, et auctor sapien condimentum mattis."}/>
        <ProjectUnit image={"https://picsum.photos/1000"} title={"Example project"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum dictum nisi, eget vestibulum mi tempus sit amet. Nulla lobortis elementum mauris, et auctor sapien condimentum mattis."}/>
      </div>
    </div>
  )
}
