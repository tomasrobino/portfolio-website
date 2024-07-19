import React, {useEffect, useRef, useState} from 'react'
import styles from "./App.module.css"
import Header from "./Header.tsx";
import Project from "./Project.tsx";


function App() {
  const viewportPos = (window.innerHeight/100)*40;
  const projectsRef = useRef<HTMLHeadingElement>(null);
  const [divPos, setDivPos] = useState(-300);

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll as (ev: Event) => void);
  })

  function handleScroll(event: WheelEvent) {
    if (!projectsRef.current) return;
    const bounds = projectsRef.current!.getBoundingClientRect();
    //console.log(bounds.top)

    console.log(event)
    if (Math.floor(viewportPos) === Math.floor(bounds.top)) {
      document.body.style.overflow = "hidden";
      if (event.deltaY < 0) {
        setDivPos(divPos-80);
        if (divPos <= -300) document.body.style.overflow = "auto";
      } else setDivPos(divPos+80);

    }

  }

  return (
    <div className={styles.app}>
      <Header />
      <div style={{ backgroundColor: "black", height: "200vh" }}></div>
      <h1 className={styles.title} id="projectsHeader" ref={projectsRef}>Projects</h1>
      <div style={{ position: "sticky", top: "25vh" }}>
        <Project offset={0} right={divPos} image={"https://picsum.photos/1000"} title={"Example project"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum dictum nisi, eget vestibulum mi tempus sit amet. Nulla lobortis elementum mauris, et auctor sapien condimentum mattis."}/>
        <Project offset={(window.innerWidth/100)*40 + 800} right={divPos} image={"https://picsum.photos/200"} title={"Example project"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum dictum nisi, eget vestibulum mi tempus sit amet. Nulla lobortis elementum mauris, et auctor sapien condimentum mattis."}/>
        <Project offset={(window.innerWidth/100)*40*2 + 800*2} right={divPos} image={"https://picsum.photos/200"} title={"Example project"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum dictum nisi, eget vestibulum mi tempus sit amet. Nulla lobortis elementum mauris, et auctor sapien condimentum mattis."}/>
      </div>
      <div style={{ backgroundColor: "black", height: "200vh" }}></div>
    </div>
  )
}

export default App
