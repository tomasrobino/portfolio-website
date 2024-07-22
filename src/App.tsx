import React from 'react'
import styles from "./App.module.css"
import Header from "./Header.tsx";
import ProjectGroup from "./ProjectGroup.tsx";


function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div style={{ backgroundColor: "black", height: "200vh" }}></div>
        <ProjectGroup />
      <div style={{ backgroundColor: "black", height: "200vh" }}></div>
    </div>
  )
}

export default App
