import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from "./App.module.css"
import Header from "./Header.tsx";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.app}>
      <Header />
    </div>
  )
}

export default App
