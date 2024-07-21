import React, {useEffect, useRef, useState} from 'react'
import styles from "./App.module.css"
import Header from "./Header.tsx";
import Project from "./Project.tsx";


function App() {
  const viewportPos = (window.innerHeight/100)*40;
  const projectGroupRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLHeadingElement>(null);
  const offsetRef = useRef(0);
  const [divPos, setDivPos] = useState(0);

  useEffect(() => {
    if (!projectGroupRef.current) return;
    const children = projectGroupRef.current.children;
    const res = "-" + (( children[0].getBoundingClientRect().width + parseFloat(getComputedStyle(children[0]).marginRight) ) * children.length).toString() + "px";
    projectGroupRef.current.style.right = res;
    setDivPos(parseFloat(res))
    offsetRef.current = parseFloat(res);
  }, [])

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll as (ev: Event) => void);
  })

  function handleScroll(event: WheelEvent) {
    if (!projectsRef.current) return;
    const bounds = projectsRef.current!.getBoundingClientRect();
    if (Math.floor(viewportPos) === Math.floor(bounds.top)) {
      document.body.style.overflow = "hidden";
      if (event.deltaY < 0) {
        setDivPos(divPos-80);
        if (divPos <= offsetRef.current) document.body.style.overflow = "auto";
      } else setDivPos(divPos+80);
    }
  }

  return (
    <div className={styles.app}>
      <Header />
      <div style={{ backgroundColor: "black", height: "200vh" }}></div>
      <h1 className={styles.title} id="projectsHeader" ref={projectsRef}>Projects</h1>
      <div style={{ position: "sticky", top: "25vh"}}>
        <div ref={projectGroupRef} className={styles.cardGroup} style={{ right: divPos }}>
          <Project image={"https://picsum.photos/1000"} title={"Example project"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum dictum nisi, eget vestibulum mi tempus sit amet. Nulla lobortis elementum mauris, et auctor sapien condimentum mattis."}/>
          <Project image={"https://picsum.photos/200"} title={"Example project"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum dictum nisi, eget vestibulum mi tempus sit amet. Nulla lobortis elementum mauris, et auctor sapien condimentum mattis."}/>
          <Project image={"https://picsum.photos/200"} title={"Example project"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum dictum nisi, eget vestibulum mi tempus sit amet. Nulla lobortis elementum mauris, et auctor sapien condimentum mattis."}/>
        </div>
      </div>
      <div style={{ backgroundColor: "black", height: "200vh" }}></div>
    </div>
  )
}

export default App
