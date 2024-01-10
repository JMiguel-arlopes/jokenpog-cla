import React from "react";
import { useState, useEffect, useRef } from "react";
import useTypewriter from "react-typewriter-hook";
import styles from './writer.module.css'

export default function Writer() {
  const [magicName, setMagicName] = useState('');
  const intervalRef = useRef({});
  const name = useTypewriter(magicName);

  const MagicOcean = [
    "Mobile Legends: Bang Bang.",
    "JokenpoG Team.",
    "Seja Bem-Vindo."
  ];
  let index = 0;

  useEffect(
    () => {
      intervalRef.current = setInterval(() => {
        setMagicName(MagicOcean[index]);
        index = index > MagicOcean.length -1 ? 0 : index+1;
        
      }, 6000);
      return function clear() {
        clearInterval(intervalRef.current);
      };
    },
    [magicName]
  );
  return (
    <div className={styles.writer}>
      <p>{name}<span>|</span></p>
    </div>
  );
}