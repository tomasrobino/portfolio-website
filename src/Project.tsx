import styles from "./Project.module.css";
import React from "react";
import {Card, CardContent, CardHeader, CardMedia} from "@mui/material";

export default function Project(props: { offset: number, right: number, title: string, image: string, description: string }) {
  /*
  return (
    <Card className={styles.card} style={{ right: props.right }}>
      <CardContent>
        <CardHeader title={props.title} className={styles.cardHeader}/>
        <CardMedia component="img" alt={props.title} image={props.image} className={styles.cardMedia}/>
        <p>{props.description}</p>
      </CardContent>
    </Card>
  )
   */

  return (
    <div style={{ right: props.right-props.offset }} className={styles.card}>
      <img src={props.image} alt={props.title} className={styles.img}/>
      <div className={styles.titleNDesc}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  )
}