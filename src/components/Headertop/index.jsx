
"use client";

import { useState } from "react";
import styles from './Headertop.module.css'
export default function Headertop() {
  const [visible, setVisible] = useState(true);
  const [hover, setHover] = useState(false);

  if (!visible) return null;

  return (
    <div className={styles.banner}>
      <p>
        Today deal sale off 70%. End in · 
        <span 
          className={hover ? styles.hurryUpHover : styles.hurryUp}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Hurry Up →
        </span>
      </p>
      <button className={styles.close} onClick={() => setVisible(false)}>× close</button>
    </div>
  );
}
